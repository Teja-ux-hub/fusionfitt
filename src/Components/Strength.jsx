import React from 'react';
import strength from './strength.mp4';




function Strength() {
  return (
    <div className="relative h-[100%] w-full overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 h-full w-full object-cover opacity-50" 
        autoPlay 
        loop 
        muted
      >
        <source src={strength} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative p-8 text-black h-full w-full rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Strength Training</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>Strength training (or resistance training) is a type of exercise that causes your muscles to resist an external force, according to the definition from Penn State College of Medicine. The force can be applied by your body weight, dumbbells, kettlebells, barbells, resistance bands, exercise machines, or several other tools.</li>
          <li>According to the HHS physical activity guidelines, all adults should complete at least two total-body strength workouts per week for general health. That’s in addition to the weekly 150 minutes of moderate-intensity aerobic exercise (the category of exercise that raises your heart rate, such as brisk walking, jogging, or water aerobics).</li>
          <li>According to the Physical Activity Guidelines, muscle-strengthening activities count if they involve a moderate or greater level of intensity or effort than you’re accustomed to and work the body's major muscle groups (the legs, hips, back, chest, abdomen, shoulders, and arms).</li>
          <li>Benefits of strength training include improved muscle mass, increased metabolism, enhanced functional fitness, and better joint health.</li>
          <li>It's essential to incorporate various exercises that target different muscle groups to achieve balanced strength development.</li>
          <li>Remember to prioritize proper form and technique to avoid injuries and maximize the effectiveness of your workouts.</li>
        </ul>

        {/* Add detailed content and images here */}
      </div>
    </div>
  );
}

export default Strength;
