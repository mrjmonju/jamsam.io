import React from "react";
// import css
import "./../style/global.css";

function HeroSectionTwo(props) {
  return (
    <>
      <section className="b-g-color min-h-min py-36 sm:py-40">
        <div className="my-auto mx-auto w-3/4 sm:w-2/5 text-white">
          <h1 className="text-center text-3xl sm:text-5xl font-bold sm:font-bold mb-5">
            {props.title}
          </h1>
          <h6 className="text-center text-lg sm:text-xl font-bold sm:font-extrabold mb-5">
            {props.tagline}
          </h6>
          <p className="text-center text-base text-neutral-300">
            {props.details}
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroSectionTwo;
