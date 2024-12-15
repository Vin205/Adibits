import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";

// Animation Variants
export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay },
  },
});

// MetricCard Component
const MetricCard = ({ value, label, delay }) => {
  // Split value into numbers and "k+"
  const splitValue = value.match(/(\d+)([a-zA-Z+]+)/);

  return (
    <motion.div
      variants={FadeUp(delay)}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center space-y-2"
    >
      <motion.h2
        className="text-4xl font-extrabold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
      >
        {/* Styling for number and 'k+' */}
        <span className="text-black">{splitValue[1]}</span>
        <span className="text-orange-500">{splitValue[2]}</span>
      </motion.h2>
      <p className="text-gray-600 text-sm lg:text-base">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center min-h-[650px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center py-14 w-full md:w-1/2 space-y-6">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-3xl lg:text-5xl font-bold leading-tight"
          >
            <span className="text-orange-500 text-4xl lg:text-6xl">Unlock</span>
            <br />
            <span className=" text-4xl lg:text-6xl">Your Career</span>
          </motion.h1>
          <motion.p
            variants={FadeUp(0.7)}
            initial="initial"
            animate="animate"
            className="text-gray-600 text-sm md:text-base"
          >
            Explore opportunities from across the globe to
            <br /> learn, showcase skills, gain CV points & get hired by
            <br /> your dream company.
          </motion.p>
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="flex gap-4"
          >
            <button className="primary-btn">Contact</button>
            <button className="business-btn-lavender">Get Unstop Pro!</button>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end items-center w-full md:w-1/2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={HeroPng}
            alt="Hero"
            className="w-[300px] sm:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>

      {/* Metrics Section */}
      <motion.div
        initial="initial"
        animate="animate"
        className="bg-white shadow-md mt-8 py-8 px-4 md:px-12"
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <MetricCard value="18M+" label="Active Users" delay={1.0} />
          <MetricCard value="22.3M+" label="Assesments" delay={1.2} />
          <MetricCard value="130k+" label="Opportunities" delay={1.4} />
          <MetricCard value="800+" label="Brands trust us" delay={1.6} />
          <MetricCard value="42k+" label="Organizations" delay={1.8} />
          <MetricCard value="78+" label="Countries" delay={2.0} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
