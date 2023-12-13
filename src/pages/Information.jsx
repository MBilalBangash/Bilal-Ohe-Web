import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonSpinner from "../components/ButtonSpinner";
import { useDispatch } from "react-redux";
import { newApply } from "../service/apply";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    marks1stYear: "",
    marks2ndYear: "",
  });

  // const [form] = Form.useForm();

  // const onFinish = (values) => {

  //   form.resetFields();
  // };<form onFinish={onFinish}></form>

  const { name, phoneNumber, email, city, marks1stYear, marks2ndYear } =
    formData;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const formSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);

  //     console.log("Sending request with formData:", formData);

  //     const response = await axios.post(
  //       "https://ohe-server.vercel.app/api/v1/applies/new",
  //       formData
  //     );

  //     console.log("API Response:", response);
  //     alert("Form submitted successfully");
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     console.log("Error Response:", error.response?.data);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await dispatch(newApply({ formData, navigate }));
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className=" m-10">
          <p className=" text-2xl font-semibold">Personal Information</p>

          <Row>
            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">Name</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeHandler}
                  placeholder="Name"
                />
              </div>
            </Col>
            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">Contact No</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onChangeHandler}
                  placeholder="Phone Number"
                />
              </div>
            </Col>

            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">Email</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  placeholder="Email"
                />
              </div>
            </Col>

            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">City</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="city"
                  value={city}
                  onChange={onChangeHandler}
                  placeholder="City"
                />
              </div>
            </Col>

            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">1st Year Marks</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="marks1stYear"
                  value={marks1stYear}
                  onChange={onChangeHandler}
                  placeholder="1st Year Marks"
                />
              </div>
            </Col>

            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div className=" m-3">
                <h2 className=" font-semibold mt-6 ">2nd Year Marks</h2>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="marks2ndYear"
                  value={marks2ndYear}
                  onChange={onChangeHandler}
                  placeholder="2nd Year Marks"
                />
              </div>
            </Col>
          </Row>

          <p className=" text-2xl mt-8 font-semibold">Intended Program</p>
          <div className=" flex mt-3">
            <input
              type="radio"
              name="radio-group"
              value="1"
              defaultChecked
              className=" w-5"
            />
            <p className=" font-bold ml-3">Mbbs</p>
          </div>

          <div className=" flex mt-3">
            <input type="radio" name="radio-group" value="2" className=" w-5" />
            <p className=" font-bold ml-3">Phd</p>
          </div>

          <div className=" flex mt-3">
            <input type="radio" name="radio-group" value="3" className=" w-5" />
            <p className=" font-bold ml-3">Masters</p>
          </div>

          <div className=" flex mt-3">
            <input type="radio" name="radio-group" value="4" className=" w-5" />
            <p className=" font-bold ml-3">Bachelor/Diploma</p>
          </div>

          <button
            onClick={showToastMessage}
            type="submit"
            className=" text-white bg-red-500 w-40 font-bold mt-5 flex p-3"
            disabled={loading}
          >
            {loading ? <ButtonSpinner /> : "Send Now"}

            <ToastContainer position="top-center" reverseOrder={true} />
          </button>

          {/* <button
            className="text-white bg-gray-500 w-40  mt-3 flex p-3"
            onClick={handleShowSomethingClick}
          >
            <div className=" flex ">
              <svg
                className=" w-6 bg-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
              <p className=" ml-4">Success</p>
            </div>
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Information;
