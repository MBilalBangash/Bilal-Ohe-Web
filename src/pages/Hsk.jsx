import React from "react";
import Logo from "../assets/footer-logo.png";

const Hsk = () => {
  return (
    <div>
      <div className=" m-10">
        <p className=" text-2xl font-semibold">HSK</p>
        <p className=" mt-4">
          HSK (Hanyu Shuiping Kaoshi) is a standardized Chinese language
          proficiency test for non-native Chinese speakers. It is organized by
          the Hanban/Confucius Institute Headquarters and administered by the
          Chinese Testing International Co., Ltd. The HSK has six levels, each
          corresponding to a different level of Chinese proficiency. The HSK
          syllabus covers the four language skills: listening, speaking,
          reading, and writing. Each level has its own vocabulary and grammar
          points, as well as a corresponding set of test items. Here is a brief
          overview of each level:
        </p>

        <p className=" mt-2">
          <span className=" font-bold">HSK 1:</span>
          This level is designed for beginners who have mastered 150 commonly
          used Chinese words and can carry out basic conversations on topics
          such as self-introduction, shopping, and asking for directions. The
          test consists of a listening section and a reading section, with a
          total of 40 multiple-choice questions.
        </p>
        <p className=" mt-2">
          <span className=" font-bold">HSK 2:</span>
          This level is for learners who have a vocabulary of 300 commonly used
          Chinese words and can communicate in simple Chinese phrases and
          sentences. The test consists of a listening section, a reading
          section, and a writing section, with a total of 60 multiple-choice
          questions.
        </p>
        <p className=" mt-2">
          <span className=" font-bold">HSK 3:</span>
          This level is designed for beginners who have mastered 150 commonly
          used Chinese words and can carry out basic conversations on topics
          such as self-introduction, shopping, and asking for directions. The
          test consists of a listening section and a reading section, with a
          total of 40 multiple-choice questions.
        </p>
        <p className=" mt-2">
          <span className=" font-bold">HSK 4:</span>
          This level is for learners who have a vocabulary of 300 commonly used
          Chinese words and can communicate in simple Chinese phrases and
          sentences. The test consists of a listening section, a reading
          section, and a writing section, with a total of 60 multiple-choice
          questions.
        </p>
        <p className=" mt-2">
          <span className=" font-bold">HSK 5:</span>
          This level is designed for beginners who have mastered 150 commonly
          used Chinese words and can carry out basic conversations on topics
          such as self-introduction, shopping, and asking for directions. The
          test consists of a listening section and a reading section, with a
          total of 40 multiple-choice questions.
        </p>
        <p className=" mt-2">
          <span className=" font-bold">HSK 6:</span>
          This level is for learners who have a vocabulary of 300 commonly used
          Chinese words and can communicate in simple Chinese phrases and
          sentences. The test consists of a listening section, a reading
          section, and a writing section, with a total of 60 multiple-choice
          questions.
        </p>
        <p className=" mt-4">
          The HSK exams are conducted several times a year at designated test
          centers around the world. The exams are computer-based and consist of
          multiple-choice questions. The scores range from 0 to 300, with 180
          being the passing score for each level. The HSK certificate is
          recognized by universities and employers in China and other countries
          as a measure of Chinese language proficienc
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

export default Hsk;
