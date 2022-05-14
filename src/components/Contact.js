import React from "react";

import HeroSectionTwo from "./sub_components/HeroSectionTwo";
import { TabTitle } from "./TabTitle";

import "./style/global.css";
import Button from "./sub_components/Button";

function Contact() {
  TabTitle("Contact - JamSam");
  return (
    <>
      <header>
        <HeroSectionTwo
          title="Join Us"
          tagline="& More difference with Jamsam"
          details="We deliver integrated solutions, complementing our capabilities with a curated ecosystem of the world’s leading innovators to achieve better, faster, more enduring results for clients."
        />
      </header>
      <section className="b-g-off-white">
        <div className="w-4/5 sm:w-3/5 mx-auto py-20">
          <h2 className="text-gray-700 font-extrabold text-xl sm:text-3xl py-10">
            Request Free Consultation
          </h2>
          <form
            className="bg-white p-10 grid grid-cols-1 space-y-6 shadow-lg"
            action="POST"
          >
            <input
              className="b-g-off-white border border-gray-200 py-3 pl-5"
              type="text"
              placeholder="Name"
            />
            <input
              className="b-g-off-white border border-gray-200 py-3 pl-5"
              type="email"
              placeholder="Email"
            />
            <input
              className="b-g-off-white border border-gray-200 py-3 pl-5"
              type="text"
              placeholder="Contact Number"
            />
            <textarea
              className="b-g-off-white border border-gray-200 py-3 pl-5"
              type="textarea"
              placeholder="Your Message"
            />
            <Button buttonText="SEND REQUEST" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
