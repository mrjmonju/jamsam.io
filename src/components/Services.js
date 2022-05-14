import React from "react";

import HeroSectionTwo from "./sub_components/HeroSectionTwo";
import SectionHeader from "./sub_components/SectionHeader";
import SolutionImageCard from "./sub_components/SolutionImageCard";
import { TabTitle } from "./TabTitle";

function Services() {
  TabTitle("Services - JamSam");
  return (
    <>
      <header>
        <HeroSectionTwo
          title="Our Services"
          tagline="We provide a wide range of Services"
          details="We deliver integrated solutions, complementing our capabilities with a curated ecosystem of the world’s leading innovators to achieve better, faster, more enduring results for clients."
        />
      </header>
      <section className="w-8/12 mx-auto my-20">
        <SectionHeader
          title="Connect to solutions"
          subtitle="We deals with many services to take extra care of your problem solutions."
          details="Jamsam makes good things happen when people connect, whether with someone close or to someone across the globe. Opportunities appear, open up, become reality. What started as a way to get people selling online has led to billions of moments of human connections & transactions as people around the world look for all kinds of on demand products & services to be placed in the palm of their hands with the help of our technology…"
        />
      </section>
      <section>
        <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 lg:w-4/5 xl:w-3/5 mx-auto">
          <SolutionImageCard />
        </div>
      </section>
      <section className="w-full my-10">
        <img
          className="mx-auto object-cover"
          src="images/aboutuscard/JamOlogy-LOGO-1-768x251.png"
          alt="about-us"
        />
      </section>
      <section className="w-full mb-20">
        <img
          className="mx-auto object-cover"
          src="images/JamOLOGY-1024x683.png"
          alt=""
        />
      </section>
    </>
  );
}

export default Services;
