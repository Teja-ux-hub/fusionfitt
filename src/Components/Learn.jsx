import React, { useState, useEffect, useRef } from "react";
import { toast, Toaster } from 'react-hot-toast';
import CaloricCalc from "./CalorieCalc";
import Spline from '@splinetool/react-spline';
import Splinee from './Splinee.jsx';
import Strength from './Strength';
import Cardio from './Cardio';
import Health from './Health';
import Fatloss from './Fatloss';

const Learn = () => {
  const [transcript, setTranscript] = useState('');
  const startBtnRef = useRef(null);
  const stopBtnRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => console.log('Voice recognition active');
    recognition.onresult = (event) => {
      let current = event.resultIndex;
      let transcript = event.results[current][0].transcript.toLowerCase();
      setTranscript(transcript);
      handleTranscript(transcript);
    };

    const startRecognition = () => {
      recognition.start();
      toast.success('Assistant activated. You can now search for something.');
    };

    const stopRecognition = () => {
      recognition.stop();
      toast.success('Assistant stopped.');
    };

    const handleTranscript = (transcript) => {
      if (transcript.includes('open youtube')) {
        readOut('Opening YouTube, sir');
        window.open('https://www.youtube.com/');
      } else if (transcript.includes('hello')) {
        readOut('Hello Teja sir, waiting for your command');
      }
      else if(transcript.includes('bench press')){
        readOut(' ooh , bench press ,, now first keep a normal weight on the rod ,, lie on the bench with a spotter behind you, now re rack the weight and take it down to your chest and push it up verrtically ,, now repeat it 10 to 12 times')
      }
      else if (transcript.includes('cable fly')) {
        readOut('Cable fly: first stand in the middle of the two cables set on shoulder level for mid chest, lower for upper chest, higher for lower chest. Push it all the way down.');
      } 
      else if (transcript.includes('deadlift')) {
        readOut('Deadlift: Stand with feet shoulder-width apart, grab the barbell, hinge at your hips, and lift the bar up, keeping your back straight.');
      } else if (transcript.includes('lat pulldown')) {
        readOut('Lat Pulldown: Sit at the machine, grab the bar wider than shoulder-width, and pull it down towards your chest.');
      } else if (transcript.includes('seated row')) {
        readOut('Seated Row: Sit with a straight back, grab the handles, and pull towards your body while squeezing your shoulder blades.');
      } else if (transcript.includes('pull up')) {
        readOut('Pull Up: Grab the bar with a shoulder-width grip and pull your body up until your chin is above the bar.');
      } else if (transcript.includes('barbell row')) {
        readOut('Barbell Row: Bend forward, grab the barbell, and row it towards your body while keeping your back straight.');
      } else if (transcript.includes('shoulder press')) {
        readOut('Shoulder Press: Sit or stand with the dumbbells, press them overhead while keeping your core tight.');
      } else if (transcript.includes('lateral raise')) {
        readOut('Lateral Raise: Hold dumbbells by your sides, lift your arms straight out until they are shoulder height in a diagonal path.');
      } else if (transcript.includes('front raise')) {
        readOut('Front Raise: Hold dumbbells in front of your thighs, raise them straight in front of you to shoulder height.');
      } else if (transcript.includes('rear delt fly')) {
        readOut('Rear Delt Fly: Bend forward, raise the dumbbells out to the sides with a slight bend in your elbows.');
      } else if (transcript.includes('arnold press')) {
        readOut('Arnold Press: Start with dumbbells in front of your shoulders, rotate your palms as you press overhead.');
      } else if (transcript.includes('upright row')) {
        readOut('Upright Row: Hold a barbell or dumbbells, pull them straight up to your collarbone while keeping them close to your body.');
      } else if (transcript.includes('bicep curl')) {
        readOut('Bicep Curl: Hold the dumbbells, curl them up towards your shoulders while keeping your elbows stationary.');
      } else if (transcript.includes('tricep pushdown')) {
        readOut('Tricep Pushdown: Stand at the cable machine, grab the handle, and push it down to straighten your arms.');
      } else if (transcript.includes('skull crusher')) {
        readOut('Skull Crusher: Lie on a bench, hold the barbell, and lower it to your forehead before extending back up.');
      } else if (transcript.includes('hammer curl')) {
        readOut('Hammer Curl: Hold dumbbells with palms facing your torso, curl them up towards your shoulders.');
      } else if (transcript.includes('tricep dip')) {
        readOut('Tricep Dip: Sit on the edge of a bench, lower your body down while keeping your arms straight behind you.');
      } else if (transcript.includes('preacher curl')) {
        readOut('Preacher Curl: Sit at the preacher bench, curl the barbell or dumbbells up towards your shoulders.');
      } else if (transcript.includes('squat')) {
        readOut('Squat: Stand with feet shoulder-width apart, lower your body down by bending your knees and keeping your back straight.');
      } else if (transcript.includes('leg press')) {
        readOut('Leg Press: Sit at the machine, push the platform away from you by extending your legs.');
      } else if (transcript.includes('lunges')) {
        readOut('Lunges: Step forward with one leg, lower your hips until both knees are at 90-degree angles.');
      } else if (transcript.includes('leg curl')) {
        readOut('Leg Curl: Lie face down on the machine, curl your legs towards your glutes by bending your knees.');
      } else if (transcript.includes('leg extension')) {
        readOut('Leg Extension: Sit at the machine, extend your legs out in front of you to lift the weight.');
      } else if (transcript.includes('calf raise')) {
        readOut('Calf Raise: Stand with the balls of your feet on a raised surface, push up onto your toes, and slowly lower back down.');
      }
      else if(transcript.includes('dumbell fly')){
        readOut('heyy ,  its just simple as cable fly ,, first lie on a bench and take light weights in both hands and take it all the way down and bring it perpendicular to your chest ,, be safe it has a risk of injury')
      }
      else if(transcript.includes('push up')){
        readOut('wow , pushups are the great body weight exercise for muscle building ,, first keep your hands a bit wider than  your shoulder level on the ground , goo all the way down and touch your chest to the ground and pushhh as shown in the pics, thats it keep pushing your limits daily, ')
      }
      else if (transcript.includes('how are you')) {
        readOut('It was great, sir, because my charge was full all the time');
      } else if (transcript.includes('who am i')) {
        readOut('Your name is Teja sir, and you created me!');
      } else if (transcript.includes('search for')) {
        let query = transcript.split(' ').slice(2).join(' ');
        readOut(`Searching for ${query}`);
        window.open(`https://www.google.com/search?q=${query}`);
      }
      else if (transcript.includes("wish")) {
        let name = transcript.split('wish')[1].trim(); 
        readOut(`Hello my dear ${name}, how are you?`);
    }
      
      else if (transcript.includes('play music')) {
        readOut('Playing the best 45 minutes workout songs for you');
        window.open('https://youtu.be/Bw7ybhVz2XI?si=vsA_Ju8o25h5M_b8');
      }
      
      else {
        readOut('Command not recognized');
      }
    };

    const readOut = (message) => {
      const speech = new SpeechSynthesisUtterance();
      const allVoices = window.speechSynthesis.getVoices();
      speech.text = message;
      speech.voice = allVoices[90]; // Pick an appropriate voice
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
    };

    // Add event listeners after buttons are mounted
    if (startBtnRef.current && stopBtnRef.current) {
      startBtnRef.current.addEventListener('click', startRecognition);
      stopBtnRef.current.addEventListener('click', stopRecognition);
    }
    
    return () => {
      // Cleanup event listeners when the component unmounts
      if (startBtnRef.current && stopBtnRef.current) {
        startBtnRef.current.removeEventListener('click', startRecognition);
        stopBtnRef.current.removeEventListener('click', stopRecognition);
      }
    };
  }, []);

  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Strength':
        return <Strength />;
      case 'Cardio':
        return <Cardio />;
      case 'Health':
        return <Health />;
      case 'Fatloss':
        return <Fatloss />;
      default:
        return <p className="p-32">Please select a program Up there</p>;
    }
  };

  return (
    <>
      <master className='flex flex-row'>
        <section className="about py-12" id="about">
          <div className="flex flex-col">
            <section className="about py-12" id="about">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 mt-10" style={{ fontFamily: 'Times New Roman' }}>
                  EXPLORE OUR PROGRAMS TO SHAPE YOURSELF....!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="boxx bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 hover:bg-transparent hover:shadow-orange-500 hover:shadow-lg transition-all duration-300">
                    <a
                      href="#"
                      className="dumbbell text-5xl mb-4 text-purple-500 flex justify-center hover:text-orange-500 transition-all duration-300"
                      onClick={() => setActiveComponent('Strength')}
                    >
                      <i className="fas fa-dumbbell"></i>
                    </a>
                    <h3 className="text-xl font-semibold text-center mb-4">Strength Training</h3>
                    <p className="text-center text-gray-700 mb-6">
                      In this program, you are trained to improve your strength through various exercises.
                    </p>
                    <a
                      href="#"
                      className="btnn block text-center text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      onClick={() => setActiveComponent('Strength')}
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="boxx bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 hover:bg-transparent hover:shadow-orange-500 hover:shadow-lg transition-all duration-300">
                    <a
                      href="#"
                      className="run text-5xl mb-4 text-red-500 flex justify-center hover:text-orange-500 transition-all duration-300"
                      onClick={() => setActiveComponent('Cardio')}
                    >
                      <i className="fas fa-person-running"></i>
                    </a>
                    <h3 className="text-xl font-semibold text-center mb-4">Cardio Training</h3>
                    <p className="text-center text-gray-700 mb-6">
                      In this program, you are trained to perform sequential moves within 20 to 30 minutes.
                    </p>
                    <a
                      href="#"
                      className="btnn block text-center text-white bg-red-600 py-2 px-4 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      onClick={() => setActiveComponent('Cardio')}
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="boxx bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 hover:bg-transparent hover:shadow-orange-500 hover:shadow-lg transition-all duration-300">
                    <a
                      href="#"
                      className="hot text-5xl mb-4 text-orange-500 flex justify-center hover:text-orange-500 transition-all duration-300"
                      onClick={() => setActiveComponent('Fatloss')}
                    >
                      <i className="fas fa-fire"></i>
                    </a>
                    <h3 className="text-xl font-semibold text-center mb-4">Fat Burning</h3>
                    <p className="text-center text-gray-700 mb-6">
                      This program is suitable for those who want to get rid of fat and lose weight.
                    </p>
                    <a
                      href="#"
                      className="btnn block text-center text-white bg-orange-600 py-2 px-4 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      onClick={() => setActiveComponent('Fatloss')}
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="boxx bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 hover:bg-transparent hover:shadow-orange-500 hover:shadow-lg transition-all duration-300">
                    <a
                      href="#"
                      className="heart text-5xl mb-4 text-green-500 flex justify-center hover:text-orange-500 transition-all duration-300"
                      onClick={() => setActiveComponent('Health')}
                    >
                      <i className="fas fa-heart-pulse"></i>
                    </a>
                    <h3 className="text-xl font-semibold text-center mb-4">Health Fitness</h3>
                    <p className="text-center text-gray-700 mb-6">
                      This program is designed for those who want fitness but not necessarily bodybuilding.
                    </p>
                    <a
                      href="#"
                      className="btnn block text-center text-white bg-green-600 py-2 px-4 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      onClick={() => setActiveComponent('Health')}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Render the selected component */}
            <div className="container mx-auto px-4 mt-12">
              {renderComponent()}
            </div>
          </div>

          {/* <CaloricCalc /> */}
          <Splinee/>

        </section>
        {/* <div className="absolute right-[50vw] my-[5vh] gap-4 flex flex-row" style={{ bottom: '-55vh',  }}>
        <button 
          ref={startBtnRef} 
          id="start" 
          className="px-6 py-3 bg-blue-600 items-center text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          style={{ margin: '40px' }}
        >
          Start Assistant
        </button>

        <button 
          ref={stopBtnRef} 
          id="stop" 
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
          style={{ margin: '40px' }}
        >
          Stop Assistant
        </button>
      </div> */}

        <br />
        <br />
      </master>

      
      

      
    </>
  );
}

export default Learn;
