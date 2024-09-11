import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import path from "path";
import pg from "pg";
import multer from "multer";
import cors from "cors";

env.config(); // .env Configuration
const app = express(); // Express app
const port = process.env.PORT; // Port

// enable cors
app.use(cors());

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
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({ storage: storage });

// // Creating endpoints for upload images
// app.use("/images", express.static("upload/images"));
// app.post("/upload", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });

// Server Config
app.listen(port, (req, res) => {
  console.log("Server Runs on :", port);
});
