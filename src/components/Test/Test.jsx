/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/Coffee/download3.jpeg",
    title: "Coffee",
   
  },
  {
    image: "/Coffee/download4.jpeg",
    title: "Coffee",
  },
  {
    image: "/Coffee/pp.jpeg",
    title: "Coffee",
  },
  {
    image: "/Coffee/coffee.jpg",
    title: "Coffee",
  },
  {
    image: "/Coffee/download5.jpeg",
    title: "Coffee",
  },
  {
    image: "/Coffee/download6.jpeg",
    title: "Coffee",
  },
  {
    image: "/Coffee/ppp.jpeg",
    title: "Coffee",
  },
];

function Test() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
 
    const handleClick = () => {
      window.location.href = "/About";
    };
  return (
    <div className="container">
      <div className="h-full pt-20 pb-20">
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="bg-white">
                  <div>
                    <img
                      src={item.image}
                      className="w-70 h-50 object-contain block m-auto "
                    />
                  </div>

                  <div className="p-6 bg-gray-800 flow-root">
                    <p className="font-semibold text-3xl text-white text-center float-left">
                      {item.title}
                    </p>

                    <button
                      type="button" onClick={handleClick}
                      className="text-white float-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      More
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Test;
