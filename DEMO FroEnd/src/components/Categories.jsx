import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductsContext, { DataContext } from "../context/Data";
import "../styles/category.css";

export default function Category() {
  const [categories, setCategories] = useState();
  const [cateBtn, setCateBtn] = useState();

  const { data } = useContext(DataContext);
  useEffect(() => {
    axios
      .get("http://localhost:4000/productCate")
      .then((categories) => setCategories(categories.data));
  }, []);
  if (cateBtn) {
    return (
      <>
        {data &&
          data.map(
            (product, i) =>
              cateBtn == product.category_name && (
                <div key={i}>{product.name}</div>
              )
          )}
      </>
    );
  } else {
    return (
      <div className="category-sec">
        {categories &&
          categories.map((cate, i) => (
            <div
              key={i}
              onClick={() => setCateBtn(cate.name)}
              className="category"
            >
              {cate.name}
            </div>
          ))}
      </div>
    );
  }
}
