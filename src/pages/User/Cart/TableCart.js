import React from "react";
import { columnsAll } from "../../../common/table";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Input, Table } from "antd";

import { actAddToCart, actRemoveCart } from "../../../redux/actions/cartAction";
export default function TableCart({cart}) {
  const dispatch = useDispatch();

  const handleRemoveCart = (product) => {
    dispatch(actRemoveCart(product));
  };
  const handleMinus = (product) => {
    dispatch(actAddToCart({ ...product, cartQuantity: -1 }));
  };
  const handlePlus = (product) => {
    dispatch(actAddToCart({ ...product, cartQuantity: 1 }));
  };
  const columns = [
    ...columnsAll.columnCart,
    {
      title: "Choose",
      render: (record) => (
        <div className="change-quantity">
          <div className="icon icon-minus" onClick={() => handleMinus(record)}>
            <AiOutlineMinus />
          </div>
          <Input value={record.cartQuantity}></Input>
          <div className="icon icon-plus" onClick={() => handlePlus(record)}>
            <AiOutlinePlus />
          </div>
        </div>
      ),
    },
    {
      title: "Amount",
      render: (record) => (
        <div>${(record.price * record.cartQuantity).toFixed(2)}</div>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            handleRemoveCart(record);
          }}
        >
          <FaTrash />
        </button>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={cart}
        rowKey="id"
        pagination={false}
      />
    </>
  );
}
