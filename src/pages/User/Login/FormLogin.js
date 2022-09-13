/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { rules } from "../../../common/form";
import "./style.scss";
import { FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { GiCirclingFish } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../../../redux/actions/userAction";
import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import { toast } from "react-toastify";

export default function FormLogin() {
  const [run, setRun] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { login, isLoading, stateLogin } = useSelector(
    (state) => state?.userReducer
  );
  if (login) {
    setTimeout(() => {
      history.push(ROUTER_PATH.HOME.path);
    }, 2000);
  }
  const handleSubmit = (user) => {
    dispatch(actLogin(user));
  };
  useEffect(() => {
    if (login && !isLoading && stateLogin === "success") {
      toast.success("Login Success", { autoClose: 1000 });
      setRun(true);
    } else if (!login && !isLoading && stateLogin === "fail") {
      toast.warning("Login Fail", { autoClose: 1000 });
    }
  }, [isLoading]);

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
        {isLoading ? (
          <button>
            <GiCirclingFish className="spin"/>
          </button>
        ) : (
          <button>Sign In</button>
        )}
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
