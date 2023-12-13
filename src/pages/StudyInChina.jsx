import { Link } from 'react-router-dom';
import Logo from '../assets/footer-logo.png'
import React from "react";

const StudyInChina = () => {
 
  return (
    <div>
      <div className=" m-10">
        <p className=" text-2xl font-semibold">Study In China</p>
        <p className=" mt-4">
          Studying in China is an excellent opportunity for students who want to
          experience a different culture, enhance their academic credentials,
          and broaden their horizons. At Oriental Hope Education (OHE), we are
          committed to providing our students with the guidance and resources
          they need to make the most of their study abroad experience in China.
          We offer a comprehensive range of study programs in China, including
          MBBS, bachelor's, master's, and PhD courses, in various disciplines
          such as medicine, engineering, business, and humanities. Our programs
          are offered by some of the top universities in China, providing our
          students with world-class education and training. We are proud to be
          recognized by many top universities in China for our expertise in
          providing guidance and support to students who want to study in China.
          Our partnerships with these universities enable us to provide our
          students with access to excellent facilities, resources, and faculty
          members, giving them an edge in their academic pursuits. Our
          experienced and knowledgeable team at OHE is committed to guiding
          students through the admission process, visa application, and other
          formalities. We provide our students with comprehensive information
          about the courses, universities, and the application process, and
          assist them in selecting the right program that aligns with their
          academic goals and career aspirations. Our guidance services include
          pre-departure briefings, orientation sessions, and ongoing support
          throughout the students' study abroad journey. We also help students
          with accommodation arrangements, airport pickups, and other logistical
          support, ensuring a smooth transition to their new environment. At
          OHE, we are dedicated to providing our students with the best possible
          study abroad experience in China. We invite you to explore the
          exciting opportunities of studying in China with us and to benefit
          from our partnerships with top universities in China.
        </p>

       <Link to="/info"  className=" text-black w-40 font-bold mt-5 bg-gray-200 flex p-3">
          Enroll Now
          <svg
            className=" w-7 font-bold"
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
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </Link>
      </div>
      <div className=" flex justify-center">
        <img src={Logo} alt="" className=" mt-6 w-full"  />
      </div>
    </div>
  );
};

export default StudyInChina;
