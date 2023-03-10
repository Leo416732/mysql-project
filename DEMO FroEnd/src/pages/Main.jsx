import { useState } from "react";
import AddProducts from "../components/AddProduct";
import Load_More from "../components/Load_More";
import Brand from "../components/Brand";
import Category from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/AllProduct";

export default function Main() {
  const [activeBtn, setActiveBtn] = useState(
    localStorage.getItem("current") ? localStorage.getItem("current") : "all"
  );

  return (
    <div>
      <Navbar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      <div>{activeBtn == "all" && <Products />}</div>
      <div>{activeBtn == "add" && <AddProducts />}</div>
      <div>{activeBtn == "load" && <Load_More />}</div>
      <div>{activeBtn == "cate-fil" && <Category />}</div>
      <div>{activeBtn == "brand-fil" && <Brand />}</div>
    </div>
  );
}
