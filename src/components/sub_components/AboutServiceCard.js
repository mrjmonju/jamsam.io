import React from "react";

function AboutServiceCard(props) {
  return (
    <>
      <div className="bg-transparent hover:shadow-lg transition-all p-10 m-2 sm:p-10 sm:m-4">
        <img
          className="object-cover h-16 w-16"
          src={props.image}
          alt={props.imgAlt}
        />
        <h2 className="my-3 heading-color font-bold text-base sm:text-lg">
          {props.title}
        </h2>
        <p>{props.details}</p>
      </div>
    </>
  );
}

export default AboutServiceCard;
