import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export default function ProductsContext({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((data) => setData(data.data));
  }, []);

  function prodDeleteHandler(id) {
    axios
      .delete(`http://localhost:4000/product/delete?id=${id}`)
      .then(
        (res) =>
          res.data.success &&
          setData(data.filter((product) => product.id !== id))
      );
  }

  return (
    <DataContext.Provider value={{ data, setData, prodDeleteHandler }}>
      {children}
    </DataContext.Provider>
  );
}
