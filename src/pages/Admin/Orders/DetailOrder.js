import { Button, Spin, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { columnsAll } from "../../../common/table";
import { actGetOrderById } from "../../../redux/actions/orderAction";
import { Steps } from "antd";
import "../style.scss";
import { Status } from "../../../common/types";
import { editOrder } from "../../../apis/orderApi";
import { toast } from "react-toastify";

export default function DetailOrder() {
  const { id } = useParams();
  const { Step } = Steps;
  const dispatch = useDispatch();
  const { detailOrder, isLoading } = useSelector(
    (state) => state?.orderReducer
  );
  const listCart = detailOrder.cart;
  useEffect(() => {
    dispatch(actGetOrderById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStatus = () => {
    if (detailOrder.status === Status.PROCESSING) {
      return 0;
    } else if (detailOrder.status === Status.SHIPPING) {
      return 1;
    } else if (detailOrder.status === Status.DELIVERED) {
      return 3;
    } else if (detailOrder.status === Status.CANCELED) {
      return 2;
    }
  };
  const handleStatusError = () => {
    if (detailOrder.status === Status.CANCELED) {
      return "error";
    }
  };
  const handleCancelOrder = async () => {
    toast.success("Order has been cancelled success", { autoClose: 1000 });
    await editOrder({ ...detailOrder, status: Status.CANCELED }, id);
    dispatch(actGetOrderById(id));
  };
  const handleAcceptOrder = async () => {
    toast.success("Order status has been changed", { autoClose: 1000 });
    await editOrder({ ...detailOrder, status: Status.SHIPPING }, id);
    dispatch(actGetOrderById(id));
  };
  const handleCompleteOrder = async () => {
    toast.success("Order status has been changed", { autoClose: 1000 });
    await editOrder({ ...detailOrder, status: Status.DELIVERED }, id);
    dispatch(actGetOrderById(id));
  };
  const dateOrder = new Date(detailOrder.dateAdd).toLocaleString();
  const columns = [...columnsAll.columnDetailOrder];
  return (
    <>
      {isLoading ? (
        <Spin size="large" className="d-flex justify-content-center" />
      ) : (
        <div className="card-admin">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Detail Order</h1>
            <p>#{id}</p>
          </div>
          <hr></hr>
          <div className="row pt-3 pb-3" style={{ fontSize: "2rem" }}>
            <p>Invoice Id: #{id}</p>
            <p>Email: {detailOrder?.email}</p>
            <p>Address: {detailOrder?.address}</p>
            <p>Phone: {detailOrder?.phone}</p>
            <p>Date order: {dateOrder}</p>
            <p>Payment: {detailOrder?.payment}</p>
          </div>
          <div className="row p-5">
            <Steps current={handleStatus()} status={handleStatusError()}>
              <Step
                title={Status.PROCESSING}
                description={handleStatus() >= 1 ? "Complete" : "Waiting"}
              />
              <Step
                title={Status.SHIPPING}
                description={handleStatus() >= 2 ? "Complete" : "Waiting"}
              />
              <Step
                title={Status.DELIVERED}
                description={
                  handleStatus() >= 3
                    ? "Complete"
                    : handleStatusError()
                    ? "Canceled"
                    : "Waiting"
                }
              />
            </Steps>
          </div>
          <Table
            columns={columns}
            dataSource={listCart}
            rowKey="id"
            className="table-style"
            pagination={false}
          />
          <hr />
          <div className="row p-3 text-end">
            <h1>Total: ${detailOrder.total}</h1>
          </div>
          <hr />
          <div className=" p-3 d-flex gap-4 justify-content-end">
            {detailOrder.status === Status.DELIVERED ||
            detailOrder.status === Status.CANCELED ? null : (
              <>
                <Button type="danger" onClick={() => handleCancelOrder()}>
                  Cancel Order
                </Button>
                {detailOrder.status !== Status.SHIPPING ? (
                  <Button type="primary" onClick={() => handleAcceptOrder()}>
                    Accept Order
                  </Button>
                ) : (
                  <Button
                    className="bg-success text-white"
                    onClick={() => handleCompleteOrder()}
                  >
                    Complete Order
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
