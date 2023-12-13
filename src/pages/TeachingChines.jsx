import React from "react";
import Logo from "../assets/footer-logo.png";

const TeachingChines = () => {
  return (
    <div>
      <div className=" m-10">
        <p className=" text-2xl font-semibold">Teaching Chinese</p>
        <p className=" mt-4">
          At Oriental Hope Education (OHE), we believe that learning Chinese
          language and culture is a valuable asset for individuals who want to
          thrive in today's globalized world. Our mission is to provide our
          students with high-quality Chinese language education that will help
          them achieve their personal, academic, and professional goals. Our
          team of experienced and dedicated teachers are committed to creating a
          supportive and engaging learning environment where students can build
          their Chinese language skills with confidence. We use modern teaching
          methods and resources that are tailored to the needs and learning
          styles of our students. Our Chinese language curriculum covers all
          aspects of language learning, including listening, speaking, reading,
          and writing skills, as well as cultural aspects of the language. We
          offer courses for different levels of proficiency, from beginner to
          advanced, and provide guidance and support to help our students
          succeed. In addition to our language courses, we also offer Chinese
          language proficiency exams such as the HSK,HSKK,YCT,MCT,and BCT, which
          are internationally recognized and provide our students with a measure
          of their proficiency in Chinese language. We believe that learning
          Chinese language and culture is not only an academic pursuit but also
          a rewarding experience that broadens one's horizons and cultural
          understanding. We welcome you to join us at OHE and embark on an
          exciting journey of learning Chinese language and culture.
        </p>

        <button className=" text-black font-bold mt-5 bg-gray-200 flex p-3">
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
        </button>
      </div>
      <div className=" flex justify-center">
        <img src={Logo} alt="" className=" mt-6 w-full" />
      </div>
    </div>
  );
};

export default TeachingChines;
