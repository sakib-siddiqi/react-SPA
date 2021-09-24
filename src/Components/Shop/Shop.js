import React, { useState } from "react";
import Products from "./Show_Case/Products";
import "./Shop.css";
import PriceTable from "./Price_Case/PriceTable";
const Shop = () => {
  const [Product_List, setList] = useState([]);
  const [Products_Price, setPrice] = useState([]);
  const [shipping_cost, setShipping] = useState([]);
  const handle_p_count = (product) => {
    const { key, price, shipping } = product;
    const new_Product_List = [...Product_List, key];
    const new_Product_Price = [...Products_Price, price];
    const new_shipping_cost = [...shipping_cost, shipping];
    setList(new_Product_List);
    setPrice(new_Product_Price);
    setShipping(new_shipping_cost);
    console.log(new_Product_Price);
  };
  return (
    <div className="container-fluid my-5">
      <div className="row g-4 flex-column-reverse flex-md-row">
        <Products handler={handle_p_count} />
        <PriceTable
          Products_List={Product_List}
          Products_Price={Products_Price}
          shipping={shipping_cost}
        />
      </div>
    </div>
  );
};

export default Shop;
