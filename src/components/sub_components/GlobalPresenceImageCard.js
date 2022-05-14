import React from "react";
import Images from "./globalpresenceimage.json";

function GlobalPresenceImageCard() {
  return (
    <>
      {Images &&
        Images.map((item) => (
          <div key={item.id} className="mx-2 my-4">
            <div className="h-auto w-auto mx-auto mb-4 p-3 hover:scale-105 transition-all">
              <img
                className="object-cover h-full w-full"
                src={item.image}
                alt={item.alt}
              />
            </div>
            <div>
              <h1 className="text-center text-md sm:text-xl font-bold mb-1">
                {item.country}
              </h1>
              <h4 className="text-center text-sm sm:text-base text-neutral-500">
                {item.address}
              </h4>
            </div>
          </div>
        ))}
    </>
  );
}

export default GlobalPresenceImageCard;
