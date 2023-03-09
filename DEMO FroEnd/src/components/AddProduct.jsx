import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/addProduct.css";

export default function AddProducts() {
  const [categories, setCategories] = useState();
  const [brands, setBrands] = useState();
  const [newBrand, setNewBrand] = useState();
  const [newCategory, setNewCategory] = useState();
  const [toggle, setToggle] = useState(true);

  // function sendNewCategory(newCategory) {
  //   setToggle(!toggle);
  //   axios
  //     .post(`http://localhost:4000/products/category?param=${newCategory}`)
  //     .then((res) => console.log(res));
  // }

  // function sendNewBrand(newBrand) {
  //   setToggle(!toggle);
  //   axios.post(`http://localhost:4000/products/brand?param=${newBrand}`);
  //   // .then((res) => setToggle(!toggle),setBrands());
  // }

  useEffect(() => {
    axios
      .get("http://localhost:4000/productCate")
      .then((categories) => setCategories(categories.data));
  }, [toggle]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/productBrand")
      .then((brands) => setBrands(brands.data));
  }, [toggle]);

  function addProduct(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addProduct} className="form">
        <div>
          <h3>Add Product</h3>
          <div>
            <input
              name="name"
              className="input"
              placeholder="name"
              type="text"
            />
            <input
              name="price"
              className="input"
              placeholder="price"
              type="text"
            />
          </div>
          <div>
            <input
              className="input"
              name="image"
              placeholder="image"
              type="text"
            />
            <select name="asd" className="select" type="text">
              {brands &&
                brands.map((brand, i) => (
                  <option key={i} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="" className="label">
            Category
          </label>
          <select className="input-add" type="text">
            {categories &&
              categories.map((cate, i) => (
                <option key={i} value={cate.name}>
                  {cate.name}
                </option>
              ))}
          </select>
        </div>
        <button className="addBtn" type="submit">
          add +
        </button>
      </form>
      <div>
        <h3>Add Category</h3>
        <input
          className="input-add"
          onChange={(e) => setNewCategory(e.target.value)}
          type="text"
        />
      </div>
      <button
        className="addBtn"
        // onClick={((e) => e.preventDefault(), sendNewCategory(newCategory))}
      >
        Add Category +
      </button>
      <div>
        <h3>Add Brand</h3>
        <input
          className="input-add"
          onChange={(e) => setNewBrand(e.target.value)}
          type="text"
        />
      </div>
      <button
        className="addBtn"
        // onClick={((e) => e.preventDefault(), sendNewBrand(newBrand))}
      >
        add brand +
      </button>
    </div>
  );
}
