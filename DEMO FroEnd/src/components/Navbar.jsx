import Button from "react-bootstrap/Button";
import "../styles/navbar.css";

let btnNames = [
  {
    name: "All Product",
    value: "all",
  },
  {
    name: "Load More",
    value: "load",
  },
  {
    name: "Filter by category",
    value: "cate-fil",
  },
  {
    name: "Filter by brand",
    value: "brand-fil",
  },
  {
    name: "Add Product",
    value: "add",
  },
];

export default function Navbar({ setActiveBtn, activeBtn }) {
  function currentHandle(val) {
    setActiveBtn(val);
    localStorage.setItem("current", val);
  }

  return (
    <div className="navbar">
      {btnNames.map((btn, i) => (
        <Button
          variant="secondary"
          key={i}
          className={activeBtn == btn.value ? "active" : ""}
          onClick={() => currentHandle(btn.value)}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
}
