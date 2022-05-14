import React from "react";

// import card details
import Images from "./outplatformslamgecard.json";

// import global css
import "./../style/global.css";

function OutPlatformsImageCard() {
  return (
    <>
      {Images &&
        Images.map((item) => (
          <div
            key={item.id}
            className="mx-4 my-6 shadow-lg relative pb-16 rounded-md"
          >
            <div className="h-auto w-auto mx-auto mb-1 sm:mb-4 p-3">
              <img
                className="object-cover h-full w-full"
                src={item.image}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-center text-xl sm:text-2xl font-semibold mb-0">
                {item.title}
              </h1>
              <h4 className="text-right text-sm sm:text-base text-neutral-500 p-4 sm:p-5 mb-2">
                {item.details}
              </h4>
            </div>
            <div>
              <button className="w-2/3 sm:w-9/12 py-2 text-white rounded-md transition ease-in-out delay-150 b-g-primary hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 mt-6 ml-6 absolute bottom-5 xl:left-8 lg:left-3 md:left-5 sm:left-4 left-9 shadow-lg">
                {item.buttonContent}
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default OutPlatformsImageCard;
