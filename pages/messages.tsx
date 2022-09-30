import React, { useEffect, useState } from "react";
import greekSalad5 from "../assets/images/Greek-Salad-Up-Close-scaled.jpg";
import vegetarianLasagna from "../assets/images/vegetarian-lasagna.jpg";
import pizza from "../assets/images/pizza.jpg";
import rice from "../assets/images/Mushroom-Risotto-3.jpg";
import { Card, Col, Row } from "antd";
import {
  Wrapper,
  Content,
  Divider,
  RowDiv,
  Title,
  NormalText,
} from "../styles/styles";
import { Button, Modal, Input } from "antd";
import Image from "next/image";
import { contactGetAction } from "../api-call";

interface DataProps {
  id?: string;
  message?: string;
  name?: string;
  createdAt?: string;
  email?: string;
}

const Messages = () => {
  const [data, setData] = useState<Array<DataProps>>([]);
  useEffect(() => {
    const effect = async () => {
      const res = await contactGetAction();
      setData(res);
    };
    effect();
  }, []);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Wrapper>
      <Content>
        <br />
        <br />
        <Row gutter={16}>
          {data.map((item) => {
            return (
              <Col span={8} key={item?.id}>
                <Card title={item.name + " - " + item.email}>
                  {item.message}
                  <br />
                  <br />
                  <p style={{ color: "red" }}>{item.createdAt}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
      <br />
      <br />
      <br />
    </Wrapper>
  );
};

export default Messages;
