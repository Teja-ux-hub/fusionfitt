import React from 'react';
import { Link } from 'react-router-dom';
import fitnesswo from './fitnessnwo.mp4';
import Spline from '@splinetool/react-spline';
import Splinee from './Splinee.jsx';

const Home = () => {
  return (
    <section className="relative h-auto min-h-screen overflow-hidden">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted playsInline>
        <source src={fitnesswo} type="video/mp4" />
      </video>
      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
        <h1 className="text-6xl font-serif tracking-wide transition duration-300 hover:text-orange-600 hover:scale-105">SHAPE YOUR</h1>
        <h1 className="text-6xl font-serif -mt-10 tracking-wide transition duration-300 hover:text-orange-600 hover:scale-105">IDEAL BODY</h1>
        <h3 className="text-xl mt-4 tracking-wide transition duration-300 hover:text-orange-600 hover:scale-105">The Fittest Club in the country</h3>
        <p className="mt-2 tracking-wide transition duration-300 hover:text-orange-600 hover:scale-105">We guarantee you to shape and build your ideal body and live up to your fullest potential</p>
        <div className="mt-6 space-x-4">
          <Link to="/started" className="btn bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</Link>
          <Link to="/learn" className="btn bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
