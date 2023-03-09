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
export async function getProductLoad(limit) {
  const [rows] = await pool.query(
    `SELECT products.*,brands.name as 'brand_name',category.name as 'category_name' FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id limit ${limit};`
  );
  return rows;
}

export async function deleteProduct(id) {
  const [rows] = await pool.query(`DELETE from product where id=${id}`);
  return rows;
}

export async function postProduct(prod) {
  const [rows] = await pool.query("select * from category");
  await rows.find(
    (cate) =>
      cate.name === prod.category &&
      pool.query(
        `INSERT INTO product (price,stock,sale,name,category_id) VALUES(${Number(
          prod.price
        )},${Number(prod.stock)},'${prod.sale}','${prod.name}',${cate.id})`
      )
  );
}
