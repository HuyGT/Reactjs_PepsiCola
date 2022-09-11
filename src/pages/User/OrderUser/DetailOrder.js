import { Button, Spin, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { columnsAll } from "../../../common/table";
import { actGetOrderById } from "../../../redux/actions/orderAction";
import { Steps } from "antd";
import { Status } from "../../../common/types";
import { editOrder } from "../../../apis/orderApi";
import { toast } from "react-toastify";
import LayoutProfile from "../../../components/LayoutProfile";

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
  const dateOrder = new Date(detailOrder.dateAdd).toLocaleString();
  const columns = [...columnsAll.columnDetailOrder];
  return (
    <>
      <LayoutProfile
        title={
          <div className="d-flex justify-content-between align-items-center">
            <h2>Detail Order</h2>
            <p>#{id}</p>
          </div>
        }
        content={
          <>
            {isLoading ? (
              <Spin size="large" className="d-flex justify-content-center" />
            ) : (
              <div className="">
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
                  <h2>Total: ${detailOrder.total}</h2>
                </div>
                <hr />
                <div className=" p-3 d-flex gap-4 justify-content-end">
                  {detailOrder.status === Status.DELIVERED ||
                  detailOrder.status === Status.CANCELED ? null : (
                    <>
                      <Button type="danger" onClick={() => handleCancelOrder()}>
                        Cancel Order
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        }
      />
    </>
  );
}
