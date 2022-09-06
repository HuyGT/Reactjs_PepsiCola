/* eslint-disable react-hooks/exhaustive-deps */
import { Popconfirm, Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import "../style.scss";
import { columnsAll } from "../../../common/table";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import { actGetAllBrand } from "../../../redux/actions/brandAction";

import { toast } from "react-toastify";
import { deleteProductById } from "../../../apis/productApi";
import ModalProduct from "./ModalProduct";

export default function Products() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [proEdit, setProEdit] = useState("");

  const dispatch = useDispatch();

  const { listProducts, isLoading } = useSelector((state) => state?.productReducer);
  const showModalEdit = (pro) => {
    setProEdit(pro);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };

  const handleDeletePro = async (pro) => {
    toast.success("Delete Success", { autoClose: 1000 });
    await deleteProductById(pro.id);
    dispatch(actGetAllProduct());
  };

  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllBrand());
  }, []);

  const columns = [
    ...columnsAll.columnPro,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <div onClick={() => showModalEdit(record)}>
            <button className="btn btn-primary">
              <FaEdit />
            </button>
          </div>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDeletePro(record)}
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
      <div className="card">
        <div className="card-body">
          <div className="title">
            <h1>Products</h1>
            <button className="btn btn-success" onClick={() => showModalAdd()}>
              <FaPlus />
            </button>
          </div>
          <ModalProduct
            modalTitle={modalTitle}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            proEdit={proEdit}
          />
          {isLoading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : (
            <Table columns={columns} dataSource={listProducts} rowKey="id" />
          )}
        </div>
      </div>
    </>
  );
}
