import React from "react";
import Logo from "../assets/footer-logo.png";

const Bussiness = () => {
  return (
    <div>
      <div className=" m-10">
        <p className=" text-2xl font-semibold">Bussiness</p>
        <p className=" mt-4">
          China is the world's largest economy, with a population of over 1.4
          billion people and a rapidly growing middle class. As such, it
          presents an enormous opportunity for businesses looking to expand
          their operations and tap into new markets. Our company provides B2B
          and B2C services to Chambers of Commerce, offering business
          consultancy in Pakistan and China. We specialize in helping businesses
          explore new opportunities and expand their operations in these two
          dynamic markets. We work closely with our clients to understand their
          unique needs and provide tailored solutions that meet their specific
          goals. Our services include market research, business matchmaking,
          investment promotion, trade fairs, and networking events. We also
          assist with regulatory compliance, legal and tax advisory, and
          logistics support. With our extensive local knowledge and network of
          contacts in both Pakistan and China, we are well positioned to help
          businesses navigate the complexities of these markets and achieve
          success. Our business consultancy services extend to the energy
          sector, e-bikes, e-cars, and trade. Pakistan and China are both key
          players in the global energy market, with a rapidly growing demand for
          renewable energy sources. We provide market research and investment
          promotion services for companies interested in renewable energy
          projects in both countries. With our expertise in this sector, we can
          help identify promising investment opportunities, assist with
          regulatory compliance, and provide logistics support. In addition, we
          also specialize in e-bikes and e-cars, which are becoming increasingly
          popular in both Pakistan and China. As a result of the growing
          environmental concerns, there is a growing demand for clean energy
          vehicles, which are also more cost-effective in the long run. We
          provide market research and business matchmaking services for
          companies interested in entering the e-bike and e-car market in
          Pakistan and China, and can help with supply chain management,
          regulatory compliance, and logistics support. Furthermore, our trade
          services facilitate the import and export of goods between Pakistan
          and China. As the two countries have a long history of trade, we
          understand the intricacies of trade regulations and procedures in both
          countries and can assist companies with the import/export of goods,
          customs clearance, and logistics support. Our goal is to help
          businesses take advantage of the growing trade opportunities between
          Pakistan and China and achieve success in these dynamic markets.
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

export default Bussiness;
