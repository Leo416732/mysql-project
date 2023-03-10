import axios from "axios";
import { useEffect, useState } from "react";
import Success from "../icons/Success";
import "../styles/addProduct.css";

export default function AddProducts() {
  const [categories, setCategories] = useState();
  const [brands, setBrands] = useState();
  const [newBrand, setNewBrand] = useState();
  const [newCategory, setNewCategory] = useState();
  const [toggle, setToggle] = useState(true);
  const [savedAlert, setSavedAlert] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/productCate")
      .then((categories) => setCategories(categories.data));
  }, [!toggle]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/productBrand")
      .then((brands) => setBrands(brands.data));
  }, [!toggle]);

  function sendNewCategory(newCategory) {
    setToggle(!toggle);
    axios.post(`http://localhost:4000/products/category?param=${newCategory}`);
  }

  function sendNewBrand(newBrand) {
    setToggle(!toggle);
    axios.post(`http://localhost:4000/products/brand?param=${newBrand}`);
  }

  function addProduct(e) {
    let addPro = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
      sale: e.target.sale.value,
      brand_name: e.target.brand.value,
      category_name: e.target.category.value,
    };
    e.preventDefault();
    axios
      .post(`http://localhost:4000/product/add`, addPro)
      .then((res) => setSavedAlert(true));
    e.target.name.value = "";
    e.target.image.value = "";
    e.target.price.value = "";
    e.target.sale.value = "";
    e.target.brand.value = "";
    e.target.category.value = "";

    const timer = setTimeout(() => {
      setSavedAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
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
            <select name="brand" className="select" type="text">
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
          <select className="input-add" name="category" type="text">
            {categories &&
              categories.map((cate, i) => (
                <option key={i} value={cate.name}>
                  {cate.name}
                </option>
              ))}
          </select>
          <input type="text" className="input" name="sale" placeholder="sale" />
        </div>
        <button className="addBtn" type="submit">
          add +
        </button>
      </form>
      {savedAlert && (
        <div className="success">
          <Success />
          <p>Succefully saved product</p>
        </div>
      )}
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
        onClick={(e) => {
          sendNewCategory(newCategory);
          e.target.value = "";
        }}
      >
        add category +
      </button>
      <div>
        <h3>Add Brand</h3>
        <input
          className="input-add"
          onChange={(e) => {
            setNewBrand(e.target.value);
          }}
          type="text"
        />
      </div>
      <button
        className="addBtn"
        onClick={() => {
          sendNewBrand(newBrand);
        }}
      >
        add brand +
      </button>
    </div>
  );
}
