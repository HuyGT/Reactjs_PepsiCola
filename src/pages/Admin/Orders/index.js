/* eslint-disable react-hooks/exhaustive-deps */
import { Popconfirm, Space, Spin, Table } from "antd";
import React, { useEffect } from "react";
import "../style.scss";
import { columnsAll } from "../../../common/table";
import { FaTrash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllOrder } from "../../../redux/actions/orderAction";
import { toast } from "react-toastify";
import { deleteOrderById } from "../../../apis/orderApi";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";

export default function Orders() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listOrder, isLoading } = useSelector((state) => state?.orderReducer);

  const handleDeleteOrder = async (order) => {
    toast.success("Delete Success", { autoClose: 1000 });
    await deleteOrderById(order.id);
    dispatch(actGetAllOrder());
  };

  const handleRedirectDetail = (order) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL_ORDER.path, {
        id: order.id,
      })
    );
  };
  useEffect(() => {
    dispatch(actGetAllOrder());
  }, []);

  const columns = [
    ...columnsAll.columnOrder,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <div>
            <button
              className="btn btn-primary"
              onClick={() => handleRedirectDetail(record)}
            >
              <FaEye />
            </button>
          </div>
          <Popconfirm
            title="Are you sure to delete this order?"
            onConfirm={() => handleDeleteOrder(record)}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-danger">
              <FaTrash />
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="card-admin">
        <div className="card-body">
          <div className="title">
            <h1>Orders</h1>
          </div>

          {isLoading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : (
            <Table columns={columns} dataSource={listOrder} rowKey="id" />
          )}
        </div>
      </div>
    </>
  );
}
