import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { rules } from "../../../common/form";
import { editUser } from "../../../apis/userApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { actGetUserById } from "../../../redux/actions/userAction";
import LayoutProfile from "../../../components/LayoutProfile";

export default function Profile() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem("Account"))?.id;
  const { detailUser } = useSelector((state) => state?.userReducer);

  const handleEditProfile = async (values) => {
    toast.success("Edit success", { autoClose: 1000 });
    await editUser(
      {
        ...detailUser,
        fullName: values.fullName,
        address: values.address,
        phone: values.phone,
        avatar: values.avatar,
      },
      id
    );
    dispatch(actGetUserById(id));
  };

  useEffect(() => {
    dispatch(actGetUserById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    form.setFieldsValue({ ...detailUser });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailUser]);
  return (
    <>
      <LayoutProfile
        title={"Edit Profile"}
        content={
          <Form layout="vertical" onFinish={handleEditProfile} form={form}>
            <Form.Item label="Email" name={["email"]}>
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Full Name"
              name={["fullName"]}
              rules={[...rules.ruleFullName]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name={["address"]}
              rules={[...rules.ruleAddress]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name={["phone"]}
              rules={[...rules.rulePhone]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Avatar" name={["avatar"]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="success" style={{ fontSize: "1.6rem" }} htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </>
  );
}
