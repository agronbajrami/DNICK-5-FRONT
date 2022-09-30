import React, { ChangeEvent, useState } from "react";
import { Wrapper, ContactWrapper } from "../styles/styles";
import { Input, Button } from "antd";
import { registerAction } from "../api-call";
const Register = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const register = async () => {
    setError("");
    const res = await registerAction({ username: username, password: password, name: name, lastName: lastName });
    
    if (res.error) {
      if (Array.isArray(res.data)){
        setError(res.data.join('\r\n'))
      } else {
        setError(res.data);
      }
    } else {
      alert("User succesfully addded");
      setName("");
      setLastName("");
      setUsername("");
      setPassword("");
    }
  }
  return (
    <Wrapper>
      <ContactWrapper>
        <div style={{ marginTop: "4vh" }} />
        <label>Name</label>
        <Input size="large" placeholder="Name" style={{ width: "20%" }} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          value={name}/>
        <br />
        <label>Last Name</label>
        <Input size="large" placeholder="Last Name" style={{ width: "20%" }} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          value={lastName}/>
        <br />
        <label>Username</label>
        <Input size="large" placeholder="Username" style={{ width: "20%" }} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          value={username}/>
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
        <Button type="primary" size="large" onClick={register}>
          Submit
        </Button>
        <pre style={{color: "red", paddingTop: "20px"}}>
          {error}
        </pre>
        <div style={{ marginTop: "4vh" }} />
      </ContactWrapper>
    </Wrapper>
  );
};

export default Register;
