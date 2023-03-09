import express from "express";
import {
  getProduct,
  postProduct,
  deleteProduct,
  getProductLoad,
  ProductCate,
  ProductBrand,
} from "../services/prod-service.js";

const Route = express.Router();

Route.get("/products", async (req, res) => {
  const result = await getProduct();
  res.status(200).json(result);
  console.log(result);
});

Route.post("/product", async (req, res) => {
  const result = await postProduct(req.body);
  res.status(200).send(prod);
});

Route.get("/productLoad", async (req, res) => {
  let limit = req.query.limit;
  const result = await getProductLoad(limit);
  res.status(200).json(result);
});

Route.get("/productCate", async (req, res) => {
  const result = await ProductCate();
  res.status(200).json(result);
});

Route.get("/productBrand", async (req, res) => {
  let newBrand = req.body.query.param;
  const result = await newBrand(newBrand);
  res.status(200).json(result);
});

Route.get("/products/category", async (req, res) => {
  let newCategory = req.body.query.param;
  const result = await newCategory(newCategory);
  res.status(200).json(result);
});

Route.get("/products/brand", async (req, res) => {
  const result = await ProductBrand();
  res.status(200).json(result);
});
export default Route;
