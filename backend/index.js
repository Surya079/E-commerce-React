import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import path from "path";
import pg from "pg";
import multer from "multer";
import cors from "cors";
import { log } from "console";

env.config(); // .env Configuration
const app = express(); // Express app
const port = process.env.PORT; // Port

// enable cors
app.use(
  cors({
    origin: "*",
  })
);

// middleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = new pg.Client({
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});
db.connect();

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

// Register user

app.post("/register", async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;
  try {
    console.log({ username, email, password, verifyPassword });
    res.send({ message: "Successfully Registered" }).status(200);
  } catch (error) {
    res.send({ error: "error while register" });
  }
});

// Server Config
app.listen(port, () => {
  console.log("Server Runs on :", port);
});
