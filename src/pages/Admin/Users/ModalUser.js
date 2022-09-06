import { Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { rules, layout } from "../../../common/form";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../../apis/userApi";
import { actGetAllUser } from "../../../redux/actions/userAction";

export default function ModalUser(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, userEdit } = props;
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useDispatch();

  const handleSubmit = async (user) => {
    if (modalTitle === "Add") {
      toast.success("Add Success", { autoClose: 1000 });
      await addUser({ ...user, dateAdd: new Date().getTime() });
      dispatch(actGetAllUser());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      toast.success("Edit success", { autoClose: 1000 });
      await editUser(user, userEdit.id);
      dispatch(actGetAllUser());

      setIsModalVisible(false);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(userEdit);
    } else if (modalTitle === "Add") {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <Modal
      title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item label="Email" name={["email"]} rules={[...rules.ruleEmail]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["password"]}
          label="Password"
          rules={[...rules.rulePassword]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="role" label="Role" rules={[...rules.ruleRole]}>
          <Select placeholder="Select a role" allowClear>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["avatar"]} label="Avatar">
          <Input />
        </Form.Item>

        <div className="d-none">
          <Form.Item name={["address"]}>
            <Input />
          </Form.Item>
          <Form.Item name={["dateAdd"]}>
            <Input />
          </Form.Item>
          <Form.Item name={["phone"]}>
            <Input />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
