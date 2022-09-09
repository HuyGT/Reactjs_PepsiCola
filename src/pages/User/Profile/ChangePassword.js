import { Button, Form, Input } from "antd";
import React from "react";
import LayoutProfile from "../../../components/LayoutProfile";
import { rules } from "../../../common/form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editUser } from "../../../apis/userApi";
import { actGetUserById } from "../../../redux/actions/userAction";

export default function ChangePassword() {
  const [form] = Form.useForm();
  const id = JSON.parse(localStorage.getItem("Account")).id;
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state?.userReducer);

  const handleChangePassword = async (values) => {
    if (values.password === detailUser.password) {
      toast.success("Change password success", { autoClose: 1000 });
      await editUser(
        {
          ...detailUser,
          password: values.newPassword,
        },
        id
      );
      form.resetFields();
      dispatch(actGetUserById(id));
    } else {
      toast.warning("Current password not valid", { autoClose: 1000 });
    }
  };
  return (
    <>
      <LayoutProfile
        title="Change Password"
        content={
          <Form layout="vertical" form={form} onFinish={handleChangePassword}>
            <Form.Item
              label="Current Password"
              name="password"
              rules={[...rules.rulePassword]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[...rules.rulePassword]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                ...rules.rulePassword,
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error("Password do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="success"
                style={{ fontSize: "1.6rem" }}
                htmlType="submit"
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </>
  );
}
