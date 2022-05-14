import React from "react";
import AboutServiceCard from "./sub_components/AboutServiceCard";
import AboutUsCard from "./sub_components/AboutUsCard";
import HeroSection from "./sub_components/HeroSectionTwo";
import SectionHeader from "./sub_components/SectionHeader";
import { TabTitle } from "./TabTitle";

function About() {
  TabTitle("About - JamSam");
  return (
    <>
      <header>
        <HeroSection
          title="Join & More"
          tagline="JamSam gives you the competitive edge you need to win"
          details="Jamsam provides powerful, flexible, and modern technology, software development & Social Media solutions for your business. Featuring Ecommerce platform, JamSam is an outstanding choice for basically any kind of company or agencies."
        />
      </header>
      <section className="b-g-off-white pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 sm:w-3/4 lg:w-4/5 xl:w-3/5 mx-auto">
          <AboutUsCard
            image="images/aboutuscard/JamUnity-LOGO-768x236.png"
            title="Services"
            details="JamSam develops software by enabling the enterprise with an AI-powered core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem. JamSam also provides turn-key technology services and consulting on Partnership & Revenue Share …"
            listOne="Turn-Key A to Z Solution Wide Range of Functionality Unparalleled Flexibility Seamless Upgrade Path Role -Based Management Multi – Language Support State-of-the-art Technology Intuitive and easy to learn Visual & Functional, Flexible & Mobile."
            listTwo="Over 30 years of Experience Industrial expertise & Best practices Emphasis on innovation Excellent Customer Satisfaction 90% Customer Retention Project Management Experts Certified Partners Technology Advancement and Process Focus."
            listThree="Proven Global Implementation Fast Implementation Periods Proven, Predictable, Reliable Change Management Project Templates and Tools Goal & Process Driven Agile Development Continuous Improvement Pay as you Grow Solution Affordable & Accessible."
          />
          <AboutUsCard
            image="images/aboutuscard/JamOlogy-LOGO-1-768x251.png"
            title="Platform"
            details="JamSam founders launched their eCommerce software platform in 1998 with independent business units and has continued since then to develop its digital eCommerce offering and infrastructure ecosystem with a primary objective in mind; deliver a buying experience that delights, makes customers eager to return and become advocates, whilst maintaining cost efficiency and the business now evolved under consolidation of Jamsam Group."
            listOne="JamSam platforms are designed within ecosystem to give you the competitive edge you need to win, Jamsam provides powerful, flexible, and modern technology, software development & Social Media solutions for your business through our Jam Journey."
            listTwo="JamSam eCommerce solutions is the dedication and creativity of all our teams that have you in the forefront of their minds every day – striving to find new ways to enhance engagement with customers and increase sales for your stores on our platform.
          "
            listThree="JamSam developed platform that is great if you want to start a business from scratch and it’s even greater if you want to grow locally and expand your business globally.
          "
          />
        </div>
      </section>
      <section className="w-10/12 md:w-7/12 mx-auto mt-10">
        <SectionHeader
          title="We champion the bold to achieve the extraordinary."
          details="We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it. Global leaders come to us to solve industry-defining challenges. Our unique approach to change management helps structure, orchestrate and enable sustained results. We’re proud to be consistently recognized as one of the world’s best places to work, a champion of diversity and a model of social responsibility."
        />
      </section>
      <section className="w-11/12 lg:w-8/12 md:w-10/12 mx-auto my-5 sm:my-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:py-4 md:px-4">
          <AboutServiceCard
            image="images/aboutservicecard/business.png"
            img-Alt="business"
            title="Our Business"
            details="Jamsam provides software, media marketing and consultancy solutions for companies of all size across the world ranging from startup companies to large enterprises with thousands of users and millions of connections."
          />
          <AboutServiceCard
            image="images/aboutservicecard/solutions.png"
            img-Alt="solutions"
            title="Our Solutions"
            details="We strive to provide millions of our customer’s easy access to enterprise level solutions they need to run and expand their business. We prepare you for the long-term growth. We work with ambitious clients who want to define the future, not hide from it."
          />
          <AboutServiceCard
            image="images/aboutservicecard/products.png"
            img-Alt="products"
            title="Our Products"
            details="Jamsam has developed over 9 platform (saas) based products and solutions, which are regularly upgraded. In addition, our community of developers, contribute apps to cover a wide variety of business needs."
          />
          <AboutServiceCard
            image="images/aboutservicecard/methods.png"
            img-Alt="methods"
            title="Our Methodology"
            details="At Jamsam, we believe the business of any kind should cover complex needs without being complicated. We offer platforms, services, membership, training, networking, and international trade advice."
          />
          <AboutServiceCard
            image="images/aboutservicecard/mission.png"
            img-Alt="mission"
            title="Our Mission"
            details="We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be. Global leaders come to us to solve industry-defining challenges."
          />
          <AboutServiceCard
            image="images/aboutservicecard/scope.png"
            img-Alt="scope"
            title="Our Scope"
            details="Jamsam provides a range of easy to use products & services that form a complete ecosystem to accompany any and all business. Jamsam offers turnkey solution for our partners seeking bespoke, custom or white-label projects."
          />
        </div>
      </section>
    </>
  );
}

export default About;
