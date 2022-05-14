import React from "react";

import "./../style/global.css";

function AboutUsCard(props) {
  return (
    <>
      <div className="bg-white shadow-lg py-14 px-8 sm:px-12 mx-5 mb-1 sm:mb-16 mt-12 lg:-mt-20">
        <img className="mx-auto" src={props.image} alt="about-us platform" />
        <hr className="w-16 h-2 my-5 hr-color" />
        <h2 className="text-lg sm:text-3xl font-bold sm:font-extrabold my-8">
          {props.title}
        </h2>
        <p className="pb-10">{props.details}</p>
        <ul className="list-disc list-inside flex flex-col space-y-6 sm:space-y-12 pl-6">
          <li>{props.listOne}</li>
          <li>{props.listTwo}</li>
          <li>{props.listThree}</li>
        </ul>
      </div>
    </>
  );
}

export default AboutUsCard;
