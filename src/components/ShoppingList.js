import React, { useState } from "react";
import Item from "./Item"

function ShoppingList({ items }) {
  
  const [listItems, setListItems] = useState(items)

  function handleSelection(selectedItem) {
    
    let filteredItems = items.filter((item) => {
      if (selectedItem === "All") {
        return items
      } else {
        return item.category === selectedItem
      }
    })
   
    setListItems(filteredItems)
  }
  
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => (handleSelection(e.target.value))} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}  
      </ul>
    </div>
  );
}

export default ShoppingList;
