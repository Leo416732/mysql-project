import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../context/Data";
import "../styles/category.css";

export default function Category() {
  const [categories, setCategories] = useState();
  const [cateBtn, setCateBtn] = useState();
  const { data, prodDeleteHandler } = useContext(DataContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/productCate")
      .then((categories) => setCategories(categories.data));
  }, []);

  if (cateBtn) {
    return (
      <>
        <Table className="Products-table container" striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Sale</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(
                (prod, i) =>
                  cateBtn == prod.category_name && (
                    <tr key={i}>
                      <td>{prod.image.slice(0, 15)}</td>
                      <td>{prod.name}</td>
                      <td>{prod.price}</td>
                      <td>{prod.brand_name}</td>
                      <td>{prod.category_name}</td>
                      <td>{prod.sale}</td>
                      <td className="option">
                        <p>edit </p>/{" "}
                        <p
                          className="deleteBtn"
                          onClick={() => prodDeleteHandler(prod.id)}
                        >
                          delete
                        </p>
                      </td>
                    </tr>
                  )
              )}{" "}
          </tbody>
        </Table>
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
