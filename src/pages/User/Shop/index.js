/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../components/Product";
import { actGetAllBrand } from "../../../redux/actions/brandAction";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import "./style.scss";
export default function Shop() {
  const dispatch = useDispatch();
  const { listProducts } = useSelector((state) => state?.productReducer);

  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllBrand());
  }, []);
  return (
    <>
      <nav>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEqQ0prbLYwFWZy74zposvhTqpYXJi-Z_ew&usqp=CAU"></img>
      </nav>
      <div className="container-fluid mb-5">
        <div className="row">
          {listProducts.map((product) => {
            return (
              <div className="col-sm-6 col-lg-3" key={product.id}>
                <Product product={product} key={product.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
