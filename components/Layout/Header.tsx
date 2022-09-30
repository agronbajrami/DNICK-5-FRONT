import React, { useEffect, useState } from "react";
import {
  HeaderWrapper,
  HeaderNavigation,
  HeaderButton,
  LeftContent,
  RightContent,
} from "./styles";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import { Button, Col, Dropdown, Input, Menu, Row, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Router from "next/router";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <Link href="/french">French</Link>,
      },
      {
        key: "2",
        label: <Link href="/german">German</Link>,
      },
      {
        key: "3",
        label: <Link href="/italian">Italian</Link>,
      },
    ]}
  />
);

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  };
  const [tokenExists, setToken] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const existingToken = localStorage.getItem("token") || "";
    setToken(existingToken);
  });
  return (
    <HeaderWrapper>
      <LeftContent>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={86}
            height={86}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <HeaderNavigation>
          <Link href="/">
            <HeaderButton>Home</HeaderButton>
          </Link>
          <Link href="/about">
            <HeaderButton>About</HeaderButton>
          </Link>
          <Link href="/contact">
            <HeaderButton>Contact</HeaderButton>
          </Link>
          <Dropdown overlay={menu}>
            <HeaderButton>Recipes</HeaderButton>
          </Dropdown>
        </HeaderNavigation>
      </LeftContent>
      <RightContent>
        {tokenExists && (
          <Link href="/messages">
            <HeaderButton style={{ margin: "2px 20px 0 0" }}>
              Messages
            </HeaderButton>
          </Link>
        )}
        {!tokenExists && (
          <Link href="/login">
            <Button type="link">Login</Button>
          </Link>
        )}
        {tokenExists && (
          <Link href="/login">
            <Button type="link" onClick={logout}>
              Logout
            </Button>
          </Link>
        )}
        {tokenExists && (
          <Link href="/register">
            <Button type="link">Register</Button>
          </Link>
        )}
      </RightContent>
    </HeaderWrapper>
  );
}

export default Header;
