/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../components/Product";
import { actGetAllBrand } from "../../../redux/actions/brandAction";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import FilterProduct from "./FilterProduct";
import "./style.scss";
export default function Shop() {
  const dispatch = useDispatch();
  const { listProducts, isLoading } = useSelector(
    (state) => state?.productReducer
  );
  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllBrand());
  }, []);
  return (
    <>
      <FilterProduct />
      <div className="container-fluid mb-5">
        {isLoading ? (
          <Spin size="large" className="d-flex justify-content-center" />
        ) : (
          <div className="row">
            {listProducts.map((product) => {
              return (
                <div className="col-sm-6 col-lg-3 p-0" key={product.id}>
                  <Product product={product} key={product.id} />
                </div>
              );
            })}
          </div>
        )}
        {listProducts?.length === 0 && (
          <div className="d-flex justify-content-center">
            <img src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs="></img>
          </div>
        )}
      </div>
    </>
  );
}
