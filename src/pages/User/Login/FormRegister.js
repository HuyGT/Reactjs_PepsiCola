/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rules } from "../../../common/form";
import { actAddUser } from "../../../redux/actions/userAction";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
import { GiCirclingFish } from "react-icons/gi";

export default function FormRegister() {
  const dispatch = useDispatch();
  const [run, setRun] = useState(false);
  const [form] = Form.useForm();

  const { isLoading, stateRegister, register } = useSelector(
    (state) => state?.userReducer
  );

  const handleSubmit = (user) => {
    dispatch(actAddUser({ ...user, role: "user" }));
  };

  useEffect(() => {
    if (register && !isLoading && stateRegister === "success") {
      toast.success("Register Success", { autoClose: 1000 });
      setRun(true);
      setTimeout(() => {
        setRun(false);
      }, 5000);
      form.resetFields();
    } else if (!register && !isLoading && stateRegister === "fail") {
      toast.warning("Account already exists", { autoClose: 1000 });
    }
  }, [isLoading]);

  return (
    <div className="form-login">
      {run && <Confetti run={run} />}
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
        {isLoading ? (
          <button>
            <GiCirclingFish className="spin" />
          </button>
        ) : (
          <button>Sign Up</button>
        )}
      </Form>
    </div>
  );
}
