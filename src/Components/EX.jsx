import React, { useState, useEffect } from 'react';
import pushup1 from './pushup1.png';
import pushup2 from './pushup2.png';
import dips1 from './dips1.png';
import dips from './dips.png';
import fly1 from './fly1.png';
import fly2 from './fly2.png';
import dumbellfly1 from './dumbellfly1.png';
import dumbellfly2 from './dumbellfly2.png';
import pullup1 from './pullup1.png';
import pullup2 from './pullup2.png';
import latpull1 from './latpull1.png';
import latpull2 from './latpull2.png';
import bentover1 from './bentover1.png';
import bentover2 from './bentover2.png';
import deadlift1 from './deadlift1.png';
import deadlift2 from './deadlift2.png';

const Ex = () => {
  const [workoutState, setWorkoutState] = useState({
    started: false,
    timer: null,
  });

  const startWorkout = () => {
    setWorkoutState({
      started: true,
      timer: 120 * 60, // 120 minutes in seconds
    });
  };

  useEffect(() => {
    let interval;
    if (workoutState.timer > 0) {
      interval = setInterval(() => {
        setWorkoutState((prevState) => ({
          ...prevState,
          timer: prevState.timer - 1,
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [workoutState.timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const disableFor18Hours = () => {
    setTimeout(() => {
      setWorkoutState({
        started: false,
        timer: null,
      });
    }, 18 * 60 * 60 * 1000); // 18 hours in milliseconds
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8">
      {/* Chest Blaster Workout Plan */}
      <hr className='text-white w-[90vw]' />
      <h2 className="text-4xl font-bold text-white mb-2 hover:text-orange-500 transition-all duration-300 mt-[20vh]">
        Chest Blaster Workout Plan
      </h2>
      <button
        disabled={workoutState.started}
        onClick={() => {
          startWorkout();
          disableFor18Hours();
        }}
        className={`mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full transition-transform duration-300 hover:bg-yellow-600 hover:scale-110 ${workoutState.started ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        Start Chest Workout
      </button>

      {workoutState.started && <p className="text-xl text-white mt-4">Timer: {formatTime(workoutState.timer)}</p>}
      <hr className='text-white w-[90vw]' />
      <hr className='text-white w-[90vw]' />
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto scrollbar-hide">
        <Card title="Push-up" image1={pushup1} image2={pushup2} videoUrl="https://youtube.com/shorts/ba8tr1NzwXU?si=XY_2RPrw-QYyEnXB" />
        <Card title="Dips" image1={dips1} image2={dips} videoUrl="https://youtube.com/shorts/NuhXmq6x9Sk?si=JIrNIox-hgZO35Un" />
        <Card title="Chest Fly" image1={fly1} image2={fly2} videoUrl="https://youtube.com/shorts/tGXIQR89-JE?si=BGDs75cqjnbDdTsp" />
        <Card title="Dumbell Fly" image1={dumbellfly1} image2={dumbellfly2} videoUrl="https://youtube.com/shorts/vJh-4hRLH-o?si=p7mmWAfGk9AnimIq" />
      </div>

      {/* Other workout sections can follow the same pattern with the "Start Workout" button */}
      {/* Example: Wider Back Workout Plan */}
      <h2 className="text-4xl font-bold text-white mb-6 hover:text-orange-500 transition-all duration-300">
        Wider Back Workout Plan
      </h2>
      <button
        disabled={workoutState.started}
        onClick={() => {
          startWorkout();
          disableFor18Hours();
        }}
        className={`mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full transition-transform duration-300 hover:bg-yellow-600 hover:scale-110 ${workoutState.started ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        Start Back Workout
      </button>
      {workoutState.started && <p className="text-xl text-white mt-4">Timer: {formatTime(workoutState.timer)}</p>}
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto scrollbar-hide">
        <Card title="Pull-ups" image1={pullup1} image2={pullup2} videoUrl="https://www.youtube.com/shorts/dvG8B2OjfWk" />
        <Card title="Lat Pulldown" image1={latpull1} image2={latpull2} videoUrl="https://www.youtube.com/shorts/5s6KGLTMgoI" />
        <Card title="Bent-over Rows" image1={bentover1} image2={bentover2} videoUrl="https://www.youtube.com/shorts/IOOLhrkN_NI" />
        <Card title="Deadlift" image1={deadlift1} image2={deadlift2} videoUrl="https://www.youtube.com/shorts/vfKwjT5-86k" />
      </div>

      <h2 className="text-4xl font-bold text-white mb-6 hover:text-orange-500 transition-all duration-300">
        Rounder Shoulder Workout Plan
      </h2>
      <button
        disabled={workoutState.started}
        onClick={() => {
          startWorkout();
          disableFor18Hours();
        }}
        className={`mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full transition-transform duration-300 hover:bg-yellow-600 hover:scale-110 ${workoutState.started ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        Start Shoulder Workout
      </button>
      {workoutState.started && <p className="text-xl text-white mt-4">Timer: {formatTime(workoutState.timer)}</p>}
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto scrollbar-hide">
        <Card title="Overhead Press" image1={pushup1} image2={pushup2} videoUrl="https://www.youtube.com/shorts/OLePvpxQEGk" />
        <Card title="Lateral Raises" image1={dips1} image2={dips} videoUrl="https://www.youtube.com/shorts/G-piLwLu0d4" />
        <Card title="Front Raises" image1={fly1} image2={fly2} videoUrl="https://www.youtube.com/shorts/Nxn4xZy7XQM" />
        <Card title="Arnold Press" image1={dumbellfly1} image2={dumbellfly2} videoUrl="https://www.youtube.com/shorts/ppVR9oF32K0" />
      </div>

      <h2 className="text-4xl font-bold text-white mb-6 hover:text-orange-500 transition-all duration-300">
        Strong Arms Workout Plan
      </h2>
      <button
        disabled={workoutState.started}
        onClick={() => {
          startWorkout();
          disableFor18Hours();
        }}
        className={`mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full transition-transform duration-300 hover:bg-yellow-600 hover:scale-110 ${workoutState.started ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        Start Arm Workout
      </button>
      {workoutState.started && <p className="text-xl text-white mt-4">Timer: {formatTime(workoutState.timer)}</p>}
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto scrollbar-hide">
        <Card title="Bicep Curls" image1={pushup1} image2={pushup2} videoUrl="https://youtube.com/shorts/ba8tr1NzwXU?si=XY_2RPrw-QYyEnXB" />
        <Card title="Hammer Curls" image1={dips1} image2={dips} videoUrl="https://youtube.com/shorts/NuhXmq6x9Sk?si=JIrNIox-hgZO35Un" />
        <Card title="Tricep Dips" image1={fly1} image2={fly2} videoUrl="https://youtube.com/shorts/tGXIQR89-JE?si=BGDs75cqjnbDdTsp" />
        <Card title="Skull Crushers" image1={dumbellfly1} image2={dumbellfly2} videoUrl="https://youtube.com/shorts/vJh-4hRLH-o?si=p7mmWAfGk9AnimIq" />
      </div>

    </div>
  );
};

const Card = ({ title, image1, image2, videoUrl }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-white w-[400px]">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="flex overflow-x-auto space-x-4">
      <img src={image1} alt={title} className="h-[150px] w-[150px] object-contain" />
      <img src={image2} alt={title} className="h-[150px] w-[150px] object-contain" />
    </div>
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
    >
      Watch Video
    </a>
  </div>
);

export default Ex;
