/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function DetailImage({ id, image }) {
  const history = useHistory();
  const arrPId = [];
  const { listProducts } = useSelector((state) => state?.productReducer);
  listProducts.forEach((p) => {
    arrPId.push(p.id);
  });
  const maxLength = arrPId.length;
  const index = arrPId.findIndex((e) => e === parseInt(id?.id));
  let left = index - 1;
  let right = index + 1;
  let idLeft = arrPId[left];
  let idRight = arrPId[right];
  if (left === -1) {
    idLeft = arrPId[maxLength - 1];
  }
  if (right === maxLength) {
    idRight = arrPId[0];
  }

  const handleRedirectProduct = (value) => {
      history.push(
        generatePath(ROUTER_PATH.DETAIL.path, {
          id: value,
        })
      );
  };
  return (
    <>
      <div
        className="icon-left"
        onClick={() => {
          handleRedirectProduct(idLeft);
        }}
      >
        <AiOutlineSwapLeft />
      </div>
      <div
        className="icon-right"
        onClick={() => {
          handleRedirectProduct(idRight);
        }}
      >
        <AiOutlineSwapRight />
      </div>
      <img src={image} className="p-image"></img>
    </>
  );
}
