import React, { useState } from "react";
import { useSelector } from "react-redux";

import Confetti from "react-confetti";
import "./style.scss";

import TableCart from "./TableCart";
import Checkout from "./Checkout";
export default function Cart() {
  const { cart } = useSelector((state) => state?.cartReducer);
  const [run, setRun] = useState(false);

  let totalCart = 0;
  cart.forEach((c) => {
    totalCart += c.price * c.cartQuantity;
  });

  return (
    <>
      {run && <Confetti run={run} />}

      <div className="container container-cart">
        <div className="row">
          <div className="col-lg-8">
            <h1>Shopping Cart</h1>
            <TableCart cart={cart} />
            <div className="total">Total: ${totalCart.toFixed(2)}</div>
          </div>
          <div className="col-lg-4">
            <div className="checkout">
              <h1>Payment Info</h1>
              <Checkout cart={cart} totalCart={totalCart} setRun={setRun} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
