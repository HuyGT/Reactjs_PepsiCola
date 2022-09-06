/* eslint-disable react-hooks/exhaustive-deps */
import { Popconfirm, Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import "../style.scss";
import { columnsAll } from "../../../common/table";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "../../../redux/actions/userAction";
import ModalUser from "./ModalUser";
import { toast } from "react-toastify";
import { deleteUserById } from "../../../apis/userApi";

export default function Users() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [userEdit, setUserEdit] = useState("");

  const dispatch = useDispatch();

  const { listUser, isLoading } = useSelector((state) => state?.userReducer);
  const showModalEdit = (user) => {
    setUserEdit(user);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };

  const handleDeleteUser = async (user) => {
    toast.success("Delete Success", { autoClose: 1000 });
    await deleteUserById(user.id);
    dispatch(actGetAllUser());
  };

  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);

  const columns = [
    ...columnsAll.columnUser,
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
            title="Are you sure to delete this user?"
            onConfirm={() => handleDeleteUser(record)}
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
            <h1>Users</h1>
            <button className="btn btn-success" onClick={() => showModalAdd()}>
              <FaPlus />
            </button>
          </div>
          <ModalUser
            modalTitle={modalTitle}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            userEdit={userEdit}
          />
          {isLoading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : (
            <Table columns={columns} dataSource={listUser} rowKey="id" />
          )}
        </div>
      </div>
    </>
  );
}
