import React from "react";
import Image from "../assets/pic1.jpg";
import Image1 from "../assets/pic2.jpg";
import Image2 from "../assets/pic3.jpg";
import MBBS from "../assets/mbbs.jpg";
import Bach from "../assets/bach.jpg";
import Master from "../assets/Masters.jpg";
import Phd from "../assets/phd.jpg";
import HSK from "../assets/HSK.jpg";
import HSKK from "../assets/HSKK.jpg";
import MCT from "../assets/MCT.jpg";
import YST from "../assets/YST.jpg";
import BCT from "../assets/BCT.jpg";
import Pic1 from "../assets/mock.jpg";
import Pic2 from "../assets/download.jpg";
import Pic3 from "../assets/summercamp.png";
import Pic4 from "../assets/wintercamp.png";
import Pic5 from "../assets/FAQ.jpg";
import Logo from '../assets/footer-logo.png'
import { Button, Col, Row } from "antd";



const Home = () => {
  return (
    <div>
      <div
        className="mt-8"
        id="indicators-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src={Image}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image1}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image2}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4  dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <Row  gutter={[16, 16]}>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <div className="border-gray-400 border border-solid  rounded-md mt-7 p-3 ml-10">
            <div className="flex">
              <svg
                className=" w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
              <p className=" text-[20px] font-semibold  text-black">
                Study in China
              </p>
            </div>

            <div class="container flex-wrap  mx-auto  flex space-x-3 text-center">
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={MBBS} alt="" className=" w-[150px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Enroll Now</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={Bach} alt=""  className=" w-[150px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Enroll Now</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={Master} alt=""  className=" w-[150px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Enroll Now</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={Phd} alt=""  className=" w-[150px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Enroll Now</Button>
              </div>
            </div>
          </div>

          <div className="border-gray-400 border border-solid rounded-md mt-7 p-3 ml-10  ">
            <div className="  flex">
              <svg
                className=" w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
              <p className=" text-[20px] font-semibold  text-black">Exams</p>
            </div>

            <div class="container flex-wrap  mx-auto  flex space-x-3 text-center">
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={HSK} alt="" className=" w-[120px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Read More</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={HSKK} alt="" className=" w-[120px]" />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Read More</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={MCT} alt="" className=" w-[120px]"  />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Read More</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={YST} alt="" className=" w-[120px]"  />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Read More</Button>
              </div>
              <div>
                <div class="border-gray-400 border border-solid  p-4  ">
                  <img src={BCT} alt="" className=" w-[120px]"  />
                </div>
                <Button className=" mt-4 w-full bg-gray-300">Read More</Button>
              </div>
            </div>
          </div>
          <div className=" flex">
            <Col >
              <div className="border-gray-400 border border-solid rounded-md mt-7 p-3 ml-  ">
                <div className="  flex">
                  <svg
                    className=" w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                  <p className=" text-[20px] font-semibold  text-black">
                    Announcements
                  </p>
                </div>
                <hr className="border-t border-solid border-b-2" />
                <div className=" flex mt-5">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">
                    Chinese Test Dates in 202... (2022-10-14)
                  </p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">
                    Chinese Test Dates in 202... (2022-10-14)
                  </p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">
                    Chinese Test Dates in 202... (2022-10-14)
                  </p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">
                    Chinese Test Dates in 202... (2022-10-14)
                  </p>
                </div>
              </div>
            </Col>
            <Col >
              <div className="border-gray-400 border border-solid rounded-md mt-7 p-3 ">
                <div className="  flex">
                  <svg
                    className=" w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                  <p className=" text-[20px] font-semibold  text-black">
                    Score
                  </p>
                </div>
                <hr className="border-t border-solid border-b-2" />
                <div className=" flex mt-5">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">Score</p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">Score Report</p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">Score Release Progress</p>
                </div>
                <div className=" flex">
                  <svg
                    className=" w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                  <p className=" ml-2 text-[16px]">Score Release Progress</p>
                </div>
              </div>
            </Col>
          </div>
        </Col>
        <Col
          lg={4}
          xs={24}
          sm={24}
          md={12}
          xxl={24}
          className=" border-gray-400 border border-solid rounded-md  p-4 mt-7  "
        >
          <div className="flex justify-center items-center  ">
            <div className=" text-center text-xl">
              <img src={Pic1} alt="" />
              <p>Practice</p>
            </div>
          </div>
          <hr className="border-t border-solid border-b-2" />
          <div className="flex justify-center items-center  ">
            <div className=" text-center text-xl">
              <img src={Pic2} alt="" />
              <p>Download</p>
            </div>
          </div>
          <hr className="border-t border-solid border-b-2" />
          <div className="flex justify-center items-center  ">
            <div className=" text-center text-xl">
              <img src={Pic3} alt="" />
              <p>Summer Camps</p>
            </div>
          </div>
          <hr className="border-t border-solid border-b-2" />
          <div className="flex justify-center items-center ">
            <div className=" text-center text-xl">
              <img src={Pic4} alt="" />
              <p>Winter Camp</p>
            </div>
          </div>
          <hr className="border-t border-solid border-b-2" />
          <div className="flex justify-center items-center">
            <div className=" text-center text-xl">
              <img src={Pic5} alt="" />
              <p>FAQ</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className=" flex justify-center">
        <img src={Logo} alt="" className=" mt-6 w-full"/>
      </div>
    </div>
  );
};

export default Home;
