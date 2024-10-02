import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import multer from "multer";
import cors from "cors";
import bcrypt from "bcrypt";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-local";

env.config(); // Load .env configuration
const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// PostgreSQL Client
const db = new pg.Client({
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});
db.connect();

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 5,
    },
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;
});

// Login endpoint
app.post("/login", async (res, req) => {
  const email = req.body.email;
  const password = req.body.password;
});

// Profile endpoint
// app.get("/profile", (req, res) => {
//   if (req.isAuthenticated()) {
//     return res.json({ message: `Welcome, ${req.user.name}` });
//   }
//   res.status(401).json({ message: "Not authenticated" });
// });

// Logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

// Get Products
const getproducts = async () => {
  const query = "SELECT * FROM products";
  const result = await db.query(query);
  return result.rows;
};

// Route to get all products
app.get("/products", async (req, res) => {
  try {
    const products = await getproducts();
    res.json(products);
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).send("server error");
  }
});

// Storage engine for Image uploads
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating endpoints for upload images
// app.post("/uploads", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: process.env.SERVER_URL + `${port}/images/${req.file.filename}`,
//   });
// });

// Add products
app.use("/images", express.static("upload/images"));
app.post("/add-products", upload.single("productImage"), async (req, res) => {
  const { name, category, old_price, new_price } = req.body;

  // check if image file was upload
  if (!req.file) {
    return res.status(400).json({ message: "Image file is required" });
  }

  const image_Url =
    process.env.SERVER_URL + `${port}/images/${req.file.filename}`;

  try {
    const query =
      "INSERT INTO products (name, category, old_price, new_price, image) VALUES ($1, $2, $3, $4, $5)";
    const values = [name, category, old_price, new_price, image_Url];

    const result = await db.query(query, values);

    res.status(201).json({
      message: "product added successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log("Server running on port", port);
});
