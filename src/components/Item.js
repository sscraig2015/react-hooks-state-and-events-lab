import React, {useState} from "react";

function Item({ name, category }) {
  
  const [bought, setBought] = useState("")

  function updateList(){
    const updateBought = () => {
      if(bought === "") {
        return "in-cart"
      } else {
        return ""
      }
    }
    setBought(updateBought)   
  }
  
  return (
    <li className={bought}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateList} className="add">{bought === "" ? "Add to Cart" : "In Cart"}</button>
    </li>
  );
}

export default Item;
