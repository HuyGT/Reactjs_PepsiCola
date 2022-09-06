/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function DetailImage({ id, image }) {
  const history = useHistory();
  const { listProducts } = useSelector((state) => state?.productReducer);
  const maxLength = listProducts?.length;
  const handleRedirectProduct = (value, id) => {
    let idLeft = parseInt(id.id) - 1;
    let idRight = parseInt(id.id) + 1;
    if (idLeft < 1) return (idLeft = 1);
    if (idRight > maxLength) return (idRight = maxLength);
    if (value) {
      history.push(
        generatePath(ROUTER_PATH.DETAIL.path, {
          id: idRight,
        })
      );
    } else {
      history.push(
        generatePath(ROUTER_PATH.DETAIL.path, {
          id: idLeft,
        })
      );
    }
  };
  return (
    <>
      <div
        className="icon-left"
        onClick={() => {
          handleRedirectProduct(false, id);
        }}
      >
        <AiOutlineSwapLeft />
      </div>
      <div
        className="icon-right"
        onClick={() => {
          handleRedirectProduct(true, id);
        }}
      >
        <AiOutlineSwapRight />
      </div>
      <img src={image} className="p-image"></img>
    </>
  );
}
