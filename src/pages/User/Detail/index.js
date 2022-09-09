/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetProductById } from "../../../redux/actions/productAction";
import { actGetAllBrand } from "../../../redux/actions/brandAction";

import "./style.scss";
import DetailImage from "./DetailImage";
import DetailLoading from "./DetailLoading";
import DetailContent from "./DetailContent";
export default function Detail() {
  const id = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state?.productReducer);

  useEffect(() => {
    dispatch(actGetProductById(id));
    dispatch(actGetAllBrand());
  }, []);

  useEffect(() => {
    dispatch(actGetProductById(id));
  }, [id]);
  return (
    <div className="container-lg pt-5 pb-5 detail">
      <div className="row ">
        {isLoading ? (
          <DetailLoading />
        ) : (
          <>
            <div className="col-lg-6 detail-image">
              <DetailImage id={id} image={product.image} />
            </div>
            <div className="col-lg-6 detail-content">
              <DetailContent product={product} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
