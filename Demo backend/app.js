import express from "express";
import products_router from "./routes/product.js";
import cors from "cors";
import bodyParser from "body-parser";

const port = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(products_router);

app.listen(port, () => {
  console.log(port);
});
