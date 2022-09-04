import { Form, Input } from "antd";
import React from "react";
import {  rules } from "../../../common/form";
import "./style.scss";
import { FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
export default function FormLogin() {
  return (
    <div className="form-login">
      <h1>SIGN IN</h1>
      <Form layout="vertical" >
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
        <button>Sign In</button>
        <button className="btn-google">
          <SiGmail />
          Sign In with Google
        </button>
        <button className="btn-facebook">
          <FiFacebook />
          Sign In with Facebook
        </button>

      </Form>
    </div>
  );
}
