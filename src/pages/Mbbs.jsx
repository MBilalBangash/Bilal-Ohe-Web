import React from "react";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import { Col, Row } from "antd";
import Logo from "../assets/footer-logo.png";

const Mbbs = () => {
    
  return (
    <div>
      <div className="flex-col m-14 ml-24">
        <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img1} alt="" className=" w-48 items-center" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img2} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img3} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img4} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img1} alt="" className=" w-48 items-center" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img2} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img3} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Img4} alt="" className=" w-48" />
            <p className=" mt-3 ml-7 cursor-pointer text-lg">Xiamen Univeristy </p>
          </Col>
        </Row>
      </div>
      <div className=" flex justify-center">
        <img src={Logo} alt="" className=" mt-6 w-full" />
      </div>
    </div>
  );
};

export default Mbbs;
