import React from "react";
import PropTypes from "prop-types";

function HeroSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
      <span className="font-bold text-3xl text-center">
        Hit Your
        <span className="text-secondColor"> Targets..</span>
      </span>
      <p className="text-center text-sm sm:w-[430px] w-[370px]">
        Welcome to LifeTrack, where we help you rise and shine each day. Our app
        is designed to help you seize the day, stay on top of your tasks, and
        break the mold. Whether you&#39;re setting new goals or building healthy
        habits, LifeTrack is here to keep you in the groove. Let&#39;s get the
        ball rolling and make every moment count!
      </p>

      <button
        className={`block text-sm font-light rounded-lg px-9 py-3 text-white transition bg-mainColor focus:outline-none hover:bg-thirdColor border-mainColor border-mainColor`}
      >
        {" "}
        {"Let's Go Next Step.."}
      </button>
    </div>
  );
}

HeroSection.propTypes = {};

export default HeroSection;
