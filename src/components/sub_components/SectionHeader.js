import React from "react";

// global css
import "./../style/global.css";

function SectionHeader(props) {
  return (
    <>
      <div className="text-center py-3 sm:py-5 px-3 pt-8 sm:pt-16">
        <h1 className="heading-color font-extrabold text-3xl sm:text-5xl">
          {props.title}
        </h1>
        <h2 className="text-center heading-color font-bold text-base sm:text-lg py-5 sm:py-6">
          {props.subtitle}
        </h2>
        <h4 className="text-center pb-14 opacity-75">{props.details}</h4>
        <img
          className="object-cover mx-auto mb-6"
          src="./images/jamsam-divider.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default SectionHeader;
