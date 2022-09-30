import React, { ChangeEvent, useState } from "react";
import { contactAction } from "../api-call";
import {
  ContactWrapper,
  Wrapper,
  ContactTitle,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "../styles/styles";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const contact = async () => {
    setError("");
    const res = await contactAction({ message: message, name: name, email: email });

    if (res.error) {
      if (Array.isArray(res.data)) {
        setError(res.data.join('\r\n'))
      } else {
        setError(res.data);
      }
    } else {
      alert("Message succesfully sent");
      setName("");
      setEmail("");
      setMessage("");
    }
  }
  return (
    <Wrapper>
      <ContactWrapper>
        <ContactTitle>Contact Us</ContactTitle>
        <br />
        <StyledInput placeholder="ENTER YOUR NAME" bordered={false} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          value={name} />
        <br />
        <br />
        <StyledInput
          placeholder="ENTER A VALID EMAIL ADDRESS"
          bordered={false}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <StyledTextArea
          rows={4}
          placeholder="ENTER YOUR MESSAGE"
          bordered={false}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          value={message}
        />
        <br />
        <br />
        <StyledButton
          ghost
          style={{ borderColor: "black", color: "black" }}
          size="large"
          onClick={contact}
        >
          SUBMIT
        </StyledButton>
        <br />
        <br />
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
