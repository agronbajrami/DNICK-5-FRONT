import { Button, Input } from "antd";
import Router from 'next/router';

import React, { ChangeEvent, useState } from "react";
import { loginAction } from "../api-call";
import { Wrapper, ContactWrapper } from "../styles/styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = async () => {
    setError("");
    const res = await loginAction({ username: username, password: password });
    if (res.error) {
      setError(res.data.join('\r\n'))
    } else {
      localStorage.setItem("token", res.token);
      Router.push('/');
    }
  }
  return (
    <Wrapper>
      <ContactWrapper>
        <div style={{ marginTop: "15vh" }} />
        <label>Username</label>
        <Input size="large" placeholder="Username" style={{ width: "20%" }} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} value={username} />
        <br />
        <label>Password</label>
        <Input.Password
          size="large"
          placeholder="Password"
          style={{ width: "20%" }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <br />
        <Button type="primary" size="large" onClick={login}>
          Submit
        </Button>
        <pre style={{ color: "red", paddingTop: "20px" }}>
          {error}
        </pre>
        <div style={{ marginTop: "15vh" }} />

      </ContactWrapper>
    </Wrapper>
  );
};

export default Login;
