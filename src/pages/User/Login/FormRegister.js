import { Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { rules } from "../../../common/form";
import { actAddUser } from "../../../redux/actions/userAction";
import { toast } from "react-toastify";
import Confetti from "react-confetti";

export default function FormRegister() {
  const dispatch = useDispatch();
  const [run, setRun] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (user) => {
    dispatch(actAddUser(user));
    toast.success("Register success", { autoClose: 1000 });
    setRun(true);
    setTimeout(() => {
      setRun(false);
    }, 5000);
    form.resetFields();
  };
  return (
    <div className="form-login">
      {run &&<Confetti run={run}  />}
      <h1>SIGN IN</h1>
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        <Form.Item label="Email" name="email" rules={[...rules.ruleEmail]}>
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[...rules.rulePassword]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            ...rules.rulePassword,
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("Password do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <button>Sign Up</button>
      </Form>
    </div>
  );
}
