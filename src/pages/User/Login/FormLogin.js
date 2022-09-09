import { Form, Input } from "antd";
import React, { useState } from "react";
import { rules } from "../../../common/form";
import "./style.scss";
import { FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { actLogin } from "../../../redux/actions/userAction";
import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";

export default function FormLogin() {
  const [run, setRun] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { listUser } = useSelector((state) => state?.userReducer);
  const handleSubmit = (user) => {
    let valid = false;
    listUser?.forEach((u) => {
      if (u.email === user.email && u.password === user.password) {
        valid = true;
      }
    });
    if (valid) {
      dispatch(actLogin({...user}));
      toast.success("Login success", { autoClose: 1000 });
      setRun(true);
      setTimeout(() => {
        history.push(ROUTER_PATH.HOME.path);
      }, 2000);
    } else {
      toast.error("Account does not exist", { autoClose: 1000 });
      valid = false;
    }
  };

  return (
    <div className="form-login">
      {run && <Confetti run={run} />}

      <h1>SIGN IN</h1>
      <Form layout="vertical" onFinish={handleSubmit}>
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
        <button className="btn-google" type="button">
          <SiGmail />
          Sign In with Google
        </button>
        <button className="btn-facebook" type="button">
          <FiFacebook />
          Sign In with Facebook
        </button>
      </Form>
    </div>
  );
}
