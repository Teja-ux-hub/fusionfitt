import React, { useState } from 'react';

const CaloricCalc = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1',
  });

  const [totalCalories, setTotalCalories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const calculateCalories = () => {
    const { age, gender, weight, height, activity } = formData;

    if (!age || !weight || !height || age < 15 || age > 80) {
      setError('Please make sure the values you entered are correct.');
      return;
    }

    setLoading(true);

    let calories;
    const weightParsed = parseFloat(weight);
    const heightParsed = parseFloat(height);
    const ageParsed = parseFloat(age);

    if (gender === 'male') {
      if (activity === "1") calories = 1.2 * (66.5 + (13.75 * weightParsed) + (5.003 * heightParsed) - (6.755 * ageParsed));
      else if (activity === "2") calories = 1.375 * (66.5 + (13.75 * weightParsed) + (5.003 * heightParsed) - (6.755 * ageParsed));
      else if (activity === "3") calories = 1.55 * (66.5 + (13.75 * weightParsed) + (5.003 * heightParsed) - (6.755 * ageParsed));
      else if (activity === "4") calories = 1.725 * (66.5 + (13.75 * weightParsed) + (5.003 * heightParsed) - (6.755 * ageParsed));
      else calories = 1.9 * (66.5 + (13.75 * weightParsed) + (5.003 * heightParsed) - (6.755 * ageParsed));
    } else {
      if (activity === "1") calories = 1.2 * (655 + (9.563 * weightParsed) + (1.850 * heightParsed) - (4.676 * ageParsed));
      else if (activity === "2") calories = 1.375 * (655 + (9.563 * weightParsed) + (1.850 * heightParsed) - (4.676 * ageParsed));
      else if (activity === "3") calories = 1.55 * (655 + (9.563 * weightParsed) + (1.850 * heightParsed) - (4.676 * ageParsed));
      else if (activity === "4") calories = 1.725 * (655 + (9.563 * weightParsed) + (1.850 * heightParsed) - (4.676 * ageParsed));
      else calories = 1.9 * (655 + (9.563 * weightParsed) + (1.850 * heightParsed) - (4.676 * ageParsed));
    }

    setTimeout(() => {
      setTotalCalories(calories.toFixed(2));
      setLoading(false);
      setError('');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mr-5 relative top-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Calorie Calculator </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Ages 15-80"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  checked={formData.gender === 'male'}
                  onChange={() => setFormData({ ...formData, gender: 'male' })}
                  className="form-radio text-blue-600"
                />
                <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  checked={formData.gender === 'female'}
                  onChange={() => setFormData({ ...formData, gender: 'female' })}
                  className="form-radio text-blue-600"
                />
                <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              id="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="activity" className="block text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activity"
              value={formData.activity}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            >
              <option value="1">Sedentary (little or no exercise)</option>
              <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="4">Very active (hard exercise/sports 6-7 days/week)</option>
              <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? 'Calculating...' : 'Calculate'}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-500 font-medium text-sm">{error}</div>
        )}

        {totalCalories && !loading && (
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Total Calories</h5>
            <input
              type="text"
              value={totalCalories}
              readOnly
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaloricCalc;
