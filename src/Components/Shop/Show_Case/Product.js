import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, price, stock, seller, img, category } = props.item;
  return (
    <div className="card mb-3 p-3 my-4 rounded-2">
      <div className="row g-0">
        <div className="col-md-4 text-center ">
          <img
            src={img}
            className="img-fluid rounded-start rounded-3"
            alt={category}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-0 mt-3 mt-sm-0">
            <h5 className="card-title">{name}</h5>
            <p className="card-text my-text fs-6">
              By <span>{seller}</span>
            </p>
            <p className="card-text"></p>
            <h4 className="text-dark fw-bold">$ {price}</h4>
            <p className="my-text">{stock} items in stock</p>
            <button
              className="btn btn-dark my-btn"
              onClick={() => props.handler(props.item)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
