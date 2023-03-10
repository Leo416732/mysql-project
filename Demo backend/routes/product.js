import express from "express";
import {
  getProduct,
  postProduct,
  deleteProduct,
  getProductLoad,
  ProductCate,
  ProductBrand,
  newCategory,
  newBrand,
  PriceDesc,
} from "../services/prod-service.js";

const Route = express.Router();

Route.get("/products", async (req, res) => {
  const result = await getProduct();
  res.status(200).json(result);
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
  const result = await ProductBrand();
  res.status(200).json(result);
});

Route.delete("/product/delete", async (req, res) => {
  const result = await deleteProduct(req.query.id);
  res.status(200).send({ success: "ok" });
});

Route.post("/products/category", async (req, res) => {
  let newCate = req.query.param;
  const result = await newCategory(newCate);
  res.status(200).json(result);
});

Route.post("/products/brand", async (req, res) => {
  let newBra = req.query.param;
  const result = await newBrand(newBra);
  res.status(200).json(result);
});

Route.post("/product/add", async (req, res) => {
  let newPro = req.body;
  const result = await postProduct(newPro);
  res.status(200).send({ success: "ok" });
});

Route.get("/price/desc", async (req, res) => {
  const result = await PriceDesc();
  res.status(200).json(result);
});
export default Route;
