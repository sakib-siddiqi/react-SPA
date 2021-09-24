import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = (props) => {
  const [products, setState] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);
  return (
    <div className="col-12 col-md-9">
      {products.map((element) => (
        <Product item={element} handler={props.handler} key={element.key} />
      ))}
    </div>
  );
};

export default Products;
