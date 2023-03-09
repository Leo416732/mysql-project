import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../styles/table.css";
import "../styles/product.css";

export default function Products() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((data) => setData(data.data));
  }, []);
  const [data, setData] = useState();

  return (
    <div>
      {" "}
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
            data.map((prod, i) => {
              return (
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
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
