import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <div>
      <Row className=" m-10">
        <Col lg={4} xs={24} sm={24} md={12} xxl={24}>
          <p className=" text-xl font-semibold">Home</p>
          <div className=" text-[16px] cursor-pointer">
            <p>OHE</p>
            <p>News</p>
          </div>
        </Col>
        <Col lg={4} xs={24} sm={24} md={12} xxl={24}>
          <p className=" text-xl font-semibold">Services</p>
          <div className=" text-[16px] cursor-pointer">
            <p>Study in China</p>
            <p>Teaching Chinese</p>
            <p>Bussiness</p>
            <p>Tourism</p>
            <p>Teacher Training</p>
            <p>Interpretation</p>
          </div>
        </Col>
        <Col lg={4} xs={24} sm={24} md={12} xxl={24}>
          <p className=" text-xl font-semibold">Exams</p>
          <div className=" text-[16px] cursor-pointer">
            <p>HSK</p>
            <p>HSKK</p>
            <p>YCT</p>
            <p>BCT</p>
            <p>MCT</p>
          </div>
        </Col>
        <Col lg={4} xs={24} sm={24} md={12} xxl={24}>
          <p className=" text-xl font-semibold">Study in China</p>
          <div className=" text-[16px] cursor-pointer">
            <p>MBBS</p>
            <p>PHD</p>
            <p>Master</p>
            <p>Bachelors</p>
            <p>Diploma</p>
          </div>
        </Col>
        <Col lg={4} xs={24} sm={24} md={12} xxl={24}>
          <p className=" text-xl font-semibold">Others</p>
          <div className=" text-[16px] cursor-pointer">
            <p>Admission Requirements & Qualifications</p>
            <p>Chinese Laws & Regulations</p>
            <p>Scholoship for International Students</p>
            <p>Life On Campus</p>
            <p>Discover China</p>
            <p>About Us</p>
            <p>FAQ's</p>
            <p>Contact Us</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
