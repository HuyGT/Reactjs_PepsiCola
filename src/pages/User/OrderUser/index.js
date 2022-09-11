import { Space, Spin, Table } from "antd";
import React, { useEffect } from "react";
import LayoutProfile from "../../../components/LayoutProfile";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import { columnsAll } from "../../../common/table";
import { FaEye } from "react-icons/fa";
import { actGetOrderByFilter } from "../../../redux/actions/orderAction";

export default function OrderUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listOrder, isLoading } = useSelector((state) => state?.orderReducer);
  const email = JSON.parse(localStorage.getItem("Account"))?.email;

  const handleRedirectDetail = (order) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL_ORDER_USER.path, {
        id: order.id,
      })
    );
  };
  useEffect(() => {
    dispatch(actGetOrderByFilter({ email: email }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        </Space>
      ),
    },
  ];
  return (
    <>
      <LayoutProfile
        title={"Order"}
        content={
          <>
            {isLoading ? (
              <Spin size="large" className="d-flex justify-content-center" />
            ) : (
              <Table columns={columns} dataSource={listOrder} rowKey="id" style={{overflowX: "scroll"}}/>
            )}
          </>
        }
      />
    </>
  );
}
