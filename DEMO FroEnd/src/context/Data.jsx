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

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
