import data from "../../assets/data/portfolioData";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "web-design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "UX-design") {
      const filteredData = data.filter((item) => item.category === "UX");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = id => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallText-Color py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border border-solid border-smallText-Color py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("UX-design")}
              className="text-smallTextColor border border-solid border-smallText-Color py-2 px-4 rounded-[8px]"
            >
              UI/UX Design
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="1000"
              data-aos-delay="50"
              className="group max-w-full sm:w-[48.5%] md:w-[31.5%] lg:w-[32.2%] relative z-[1]"
              key={index}
            >
              <figure>
                <img src={portfolio.imgUrl} className="rounded-[8px]" alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button onClick={() => showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button className="loadmore-btn" onClick={loadMoreHandler}>
            <span className="loadmore-book-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(86, 69, 117)"
                viewBox="0 0 126 75"
              >
                <rect
                  strokeWidth="3"
                  stroke="#fff"
                  rx="7.5"
                  height="70"
                  width="121"
                  y="2.5"
                  x="2.5"
                ></rect>
                <line strokeWidth="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M25 20H50"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M101 20H76"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M16 30L50 30"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M110 30L76 30"
                ></path>
              </svg>
      
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 65 75"
                className="loadmore-book-page"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M40 20H15"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M49 30L15 30"
                ></path>
                <path
                  strokeWidth="3"
                  stroke="#fff"
                  d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                ></path>
              </svg>
            </span>
            <span className="text-white text-[15px] font-semibold items-center justify-center w-[105px] h-full flex"> Load more </span>
          </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
