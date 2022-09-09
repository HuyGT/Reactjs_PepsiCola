/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetBrandById } from "../../../redux/actions/brandAction";
import { actGetProductByFilter } from "../../../redux/actions/productAction";
import { BiSearchAlt } from "react-icons/bi";

export default function FilterProduct() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const { listBrand, brand } = useSelector((state) => state?.brandReducer);

  const itemBrand = listBrand.map((brand) => {
    return {
      label: (
        <div className="filter-brand">
          <img
            src={brand.image}
          ></img>
          {brand.brandName}
        </div>
      ),
      key: brand.id,
    };
  });
  const itemSort = [
    {
      key: "1",
      label: "Prices increase",
    },
    {
      key: "2",
      label: "Prices decrease",
    },
  ];

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterBrand = ({ key }) => {
    dispatch(actGetProductByFilter({ brandId: key }));
    dispatch(actGetBrandById(key));
  };
  const handleFilterSort = ({ key }) => {
    if (key === "1") {
      dispatch(actGetProductByFilter({ _sort: "price", _order: "asc" }));
    } else if (key === "2") {
      dispatch(actGetProductByFilter({ _sort: "price", _order: "desc" }));
    }
  };

  const menuBrand = <Menu onClick={handleFilterBrand} items={itemBrand} />;
  const menuSort = <Menu onClick={handleFilterSort} items={itemSort} />;

  useEffect(() => {
    searchValue && dispatch(actGetProductByFilter({ q: searchValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <div className="p-filter">
      <img
        src={
          brand.image
            ? brand.image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEqQ0prbLYwFWZy74zposvhTqpYXJi-Z_ew&usqp=CAU"
        }
      ></img>
      <div className="i-search">
        <input
          type={"text"}
          defaultValue={searchValue}
          autoFocus
          placeholder="Input search value"
          onChange={(e) => {
            handleInputSearch(e);
          }}
        ></input>
        <BiSearchAlt />
      </div>
      <div className="d-flex gap-5">
        <Dropdown overlay={menuBrand}>
          <div className="filter">Brands</div>
        </Dropdown>
        <Dropdown overlay={menuSort}>
          <div className="filter">Sort</div>
        </Dropdown>
      </div>
    </div>
  );
}
