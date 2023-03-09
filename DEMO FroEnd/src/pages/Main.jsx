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
  function pageHandle() {
    if (activeBtn == "all") {
      return <Products />;
    } else if (activeBtn == "add") {
      return <AddProducts />;
    } else if (activeBtn == "load") {
      return <Load_More />;
    } else if (activeBtn == "cate-fil") {
      return <Category />;
    } else if (activeBtn == "brand-fil") {
      return <Brand />;
    }
  }

  return (
    <div>
      <Navbar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      <div>{pageHandle()}</div>
    </div>
  );
}
