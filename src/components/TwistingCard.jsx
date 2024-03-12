import React, { useState } from "react";
import "../assets/TwistingCard.css"; // Import CSS for styling
import { scratch, twist } from "../utils/constants";
const TwistingCard = () => {

  return (
    <div className="flex justify-around m-10">
      {twist.map((url) => 
        <div className="twisting-card bg-black p-10 rounded-xl">
          <div className="card-inner m-1">
            <div className="card-front bg-dark rounded-lg">
              <img
                className="rounded-lg h-full"
                src={scratch}
              />
            </div>
            <div className="card-back  bg-dark rounded-lg">
              <img
                className="rounded-lg"
                src={url}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwistingCard;
