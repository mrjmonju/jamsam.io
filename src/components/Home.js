import React from "react";
// import components
import SectionHeader from "./sub_components/SectionHeader";
import OurPlatformImageCard from "./sub_components/OutPlatformsImageCard";
import GlobalPresenceImageCard from "./sub_components/GlobalPresenceImageCard";
import Button from "./sub_components/Button";
import { TabTitle } from "./TabTitle";

function Home() {
  TabTitle("JamSam");
  return (
    <>
      <div className="mx-auto">
        <header className="background-image w-full ">
          <div className="grid w-full py-40 md:py-80 grid-cols-1 justify-center items-center">
            <h1 className="text-white text-center text-2xl md:text-6xl font-extrabold tracking-wide leading-loose line-height">
              The Extraordinary <br /> happens when you <br /> Join & More...
            </h1>
          </div>
        </header>
        <section className="container w-3/4 mx-auto my-10 sm:pb-20">
          <SectionHeader
            title="We champion the bold to achieve the extraordinary."
            details="We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it. Global leaders come to us to solve industry-defining challenges. Our unique approach to change management helps structure, orchestrate and enable sustained results. We’re proud to be consistently recognized as one of the world’s best places to work, a champion of diversity and a model of social responsibility."
          />
        </section>
        <section className="b-g-primary py-20 sm:py-56">
          <div className="container mx-auto w-3/4 sm:w-4/12 grid grid-cols-1">
            <div className="">
              <h2 className="text-zinc-100 font-bold text-xl my-3">
                GET WORK DONE FASTER, WITH CONFIDENCE.
              </h2>
              <h1 className="text-zinc-300 font-extrabold text-5xl">
                Our Expertise & Your Bold ideas.
              </h1>
              <p className="text-zinc-100 my-6">
                We’ve got you covered for all your business needs. Just give us
                the details about the work you need completed, and our experts
                will get it done faster, better, and cheaper than you could
                possibly imagine.
              </p>
              <p className="text-zinc-100">
                Jamsam ignites opportunities by setting the world in motion by
                serving the small and large companies alike & bringing them
                together under one community. Two decades’ maturity for a
                business is not that long, but in eCommerce it is practically
                since the dawn of the digital eCommerce revolution.
              </p>
              <img className="mt-20" src="images/jamsam-divider.jpg" alt="" />
            </div>
            <div className="mx-auto mt-5">
              <Button buttonText="PROSPECTUS" />
            </div>
          </div>
        </section>
        <section className="container w-3/4 sm:w-2/4 mx-auto lg:my-8">
          <SectionHeader
            title="Our Platforms"
            subtitle="We enable businesses to transform the way they market, sell and operate and improve their efficiencies."
            details="Our businesses are comprised of core commerce, cloud computing, digital media and entertainment, and innovation initiatives. In addition, Jamsam, through strategic partnerships provides payment, supply-chain & marketing services for consumers and merchants on our platforms. A digital economy has developed around our platforms and businesses that consists of consumers, merchants, brands, retailers, third-party service providers, strategic alliance partners and other businesses."
          />
        </section>
        <section className="b-g-off-white py-3 sm:py-10">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-1 sm:my-8 my-0">
            <OurPlatformImageCard />
          </div>
        </section>
        <section className="container w-3/4 mx-auto my-8">
          <SectionHeader
            title="Our Services"
            subtitle="We deals with many services to take extra care of your problem solutions."
            details="Jamsam makes good things happen when people connect, whether with someone close or to someone across the globe. Opportunities appear, open up, become reality. What started as a way to get people selling online has led to billions of moments of human connections & transactions as people around the world look for all kinds of on demand products & services to be placed in the palm of their hands with the help of our technology…"
          />
        </section>
        <section className="container w-3/4 sm:w-2/4 mx-auto my-4 sm:my-8">
          <SectionHeader
            title="Our Global Presence"
            details="We’ve grown a lot through our Strategic Partnerships & Global Franchising, enabling us to have an international network with corporate offices around the world."
          />
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-1 my-8">
          <GlobalPresenceImageCard />
        </section>
        <section className="b-g-off-white py-10 sm:py-20">
          <div className="grid grid-cols-1 justify-center container w-3/4 sm:w-2/4 mx-auto my-8">
            <SectionHeader
              title="Out Tech Partners"
              subtitle="Partners make the amazing possible combining world-class technology and expertise."
              details="Designed to reduce complexity in your business so you can focus on your business growth. Migrate, integrate, build, and grow your business. Service partners are curated for their technological advancements, services, benefits and expertise. Whatever your business needs, there’s a partner for that. We make seamless integration happen. "
            />
            <div className="mx-auto">
              <Button buttonText="GROW WITH JAM" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
