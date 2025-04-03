import React, { useState } from 'react';
import Ex from './EX.jsx';

const Card = ({ day, description, onClick }) => (
  <div className="h-[16em] w-[18em] border-2 top-32 relative border-[rgb(25,15,5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgb(218,110,22)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
    <div>
      <h1 className="text-[2em] font-medium">{day}</h1>
      <p className="text-[0.85em]">{description}</p>
    </div>
    <button 
      className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
      onClick={onClick} // Trigger the onClick function passed as prop
    >
      <p>Start 🔥</p>
      <svg
        className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button>
  </div>
);

const Started = () => {
  const [showLearn, setShowLearn] = useState(false);

  // Function to handle button click and show Learn component
  const handleStartClick = () => {
    setShowLearn(true);
  };

  if (showLearn) {
    return <Ex />; // Show Learn component when button is clicked
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Row 1 */}
        <Card day="Monday" description="Ready to start your Monday with Chest day" onClick={handleStartClick} />
        <Card day="Tuesday" description="Ready to start your Tuesday with Back day" onClick={handleStartClick} />
        <Card day="Wednesday" description="Ready to start your Wednesday with Shoulder day" onClick={handleStartClick} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Row 2 */}
        <Card day="Thursday" description="Ready to start your Thursday with Arms day" onClick={handleStartClick} />
        <Card day="Friday" description="Ready to start your Friday with Leg day" onClick={handleStartClick} />
        <Card day="Saturday" description="A full body workout of less intensity" onClick={handleStartClick} />
      </div>
      <div className="flex justify-center mb-4">
        {/* Bottom Card */}
        <Card day="Sunday" description="Rest day and relaxation time..........!" onClick={handleStartClick} />
      
      </div>
    </div>
  );
};

export default Started;
