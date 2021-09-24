import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const PriceTable = (props) => {
  console.log(props);
  const price = props.Products_Price.reduce((per, post) => per + post, 0);
  const productCount = props.Products_List.length;
  const shipping=props.shipping.reduce((per, post) => per + post, 0);
  const total=price+shipping;

  return (
    <div className="col-12 col-md-3">
      <div className="card sticky-md-top" style={{top: "5%"}}>
        <div className="card-body py-4 my-dark rounded-2">
          <table className="table py-5">
            <span type="button" class=" bg-white position-relative mb-4 py-2 px-3 rounded-2">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary fs-6">
                {productCount}
                <span class="visually-hidden">unread messages</span>
              </span>
            </span>
            <tbody>
              <tr className="fw-bold text-white">
                <td>Total Price :</td>
                <td>$ {price.toFixed(2)}</td>
              </tr>
              <tr className="fw-bold text-white">
                <td>Shipping :</td>
                <td>$ {shipping.toFixed(2)}</td>
              </tr>
              <tr className="fw-bold text-white">
                <td>Total :</td>
                <td>$ {total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
