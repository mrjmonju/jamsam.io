import React from "react";
// import card details
import Images from "./solutionsimagecard.json";
// import global css
import "./../style/global.css";

function SolutionImageCard() {
  return (
    <>
      {Images &&
        Images.map((item) => (
          <div
            key={item.id}
            className="mx-4 my-6 shadow-lg relative pb-16 rounded-md"
          >
            <div className="h-auto w-auto mx-auto mb-1 p-3">
              <img
                className="object-cover h-full w-full"
                src={item.image}
                alt=""
              />
            </div>
            <div className="h-auto w-auto mx-auto mb-1 p-4">
              <img
                className="object-cover h-full w-full"
                src={item.brandLogo}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-center text-md sm:text-2xl font-semibold mb-0">
                {item.title}
              </h1>
              <h4 className="text-right text-sm sm:text-base text-neutral-500 p-5 mb-2">
                {item.details}
              </h4>
            </div>
            <button className="w-4/5 py-3 text-white rounded-md transition ease-in-out delay-150 b-g-primary hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 mt-6 ml-6 absolute bottom-5 left-2 shadow-lg">
              {item.buttonContent}
            </button>
          </div>
        ))}
    </>
  );
}

export default SolutionImageCard;
