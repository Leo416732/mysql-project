import { pool } from "../config/mysql-config.js";

export async function getProduct() {
  const [rows] = await pool.query(
    "SELECT products.*,brands.name as 'brand_name',category.name as 'category_name' FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id;"
  );
  return rows;
}
export async function ProductCate() {
  const [rows] = await pool.query(`SELECT * from category`);
  return rows;
}
export async function ProductBrand() {
  const [rows] = await pool.query(`SELECT * from brands`);
  return rows;
}
export async function getProductLoad(limit) {
  const [rows] = await pool.query(
    `SELECT products.*,brands.name as 'brand_name',category.name as 'category_name' FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id limit ${limit};`
  );
  return rows;
}

export async function deleteProduct(id) {
  const [rows] = await pool.query(`DELETE from products where id=${id}`);
  return rows;
}
export async function newCategory(newCategory) {
  const [rows] = await pool.query(
    `INSERT INTO category (name) VALUES ('${newCategory}')`
  );
  return rows;
}
export async function newBrand(newBrand) {
  const [rows] = await pool.query(
    `INSERT INTO brands (name) VALUES ('${newBrand}')`
  );
  return rows;
}

export async function postProduct(prod) {
  const [categ] = await pool.query("select * from category");
  const [brand] = await pool.query("select * from brands");
  const newProduct = await brand.find((brand) =>
    categ.find(
      (cate) =>
        cate.name === prod.category_name &&
        brand.name === prod.brand_name &&
        pool.query(
          `INSERT INTO products (image,price,sale,name,category_id,brand_id) VALUES('${prod.image}',${prod.price},${prod.sale},'${prod.name}',${cate.id},${brand.id})`
        )
    )
  );
  return newProduct;
}

export async function PriceDesc() {
  const [rows] = await pool.query(
    `SELECT products.*,brands.name as 'brand_name',category.name as 'category_name' FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id order by price desc`
  );
  return rows;
}
