import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../context/Data";
import "../styles/category.css";

export default function Category() {
  const [brands, setBrands] = useState();
  const [brandBtn, setBrandBtn] = useState();

  const { data } = useContext(DataContext);
  useEffect(() => {
    axios
      .get("http://localhost:4000/productBrand")
      .then((brands) => setBrands(brands.data));
  }, []);
  if (brandBtn) {
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
                  brandBtn == prod.brand_name && (
                    <tr key={i}>
                      <td>{prod.image.slice(0, 15)}</td>
                      <td>{prod.name}</td>
                      <td>{prod.price}</td>
                      <td>{prod.brand_name}</td>
                      <td>{prod.category_name}</td>
                      <td>{prod.sale}</td>
                      <td className="option">
                        <p>edit </p>/ <p className="deleteBtn">delete</p>
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
        {brands &&
          brands.map((brand, i) => (
            <div
              key={i}
              onClick={() => setBrandBtn(brand.name)}
              className="category"
            >
              {brand.name}
            </div>
          ))}
      </div>
    );
  }
}
