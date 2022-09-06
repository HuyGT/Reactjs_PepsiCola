/* eslint-disable react-hooks/exhaustive-deps */
import { Popconfirm, Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import "../style.scss";
import { columnsAll } from "../../../common/table";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllBrand } from "../../../redux/actions/brandAction";
import ModalBrand from "./ModalBrand";
import { toast } from "react-toastify";
import { deleteBrandById } from "../../../apis/brandApi";

export default function Brands() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [brandEdit, setBrandEdit] = useState("");

  const dispatch = useDispatch();

  const { listBrand, isLoading } = useSelector((state) => state?.brandReducer);
  const showModalEdit = (brand) => {
    setBrandEdit(brand);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };

  const handleDeleteBrand = async (brand) => {
    toast.success("Delete Success", { autoClose: 1000 });
    await deleteBrandById(brand.id);
    dispatch(actGetAllBrand());
  };

  useEffect(() => {
    dispatch(actGetAllBrand());
  }, []);

  const columns = [
    ...columnsAll.columnBrand,
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
            title="Are you sure to delete this brand?"
            onConfirm={() => handleDeleteBrand(record)}
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
            <h1>Brands</h1>
            <button className="btn btn-success" onClick={() => showModalAdd()}>
              <FaPlus />
            </button>
          </div>
          <ModalBrand
            modalTitle={modalTitle}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            brandEdit={brandEdit}
          />
          {isLoading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : (
            <Table columns={columns} dataSource={listBrand} rowKey="id" />
          )}
        </div>
      </div>
    </>
  );
}
