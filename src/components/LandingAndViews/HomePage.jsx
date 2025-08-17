
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStartJourney = () => {
    if (name) {
      navigate('/dashboard', { state: { userName: name } });
    }
  };

  return (
    <>
      <div className="bg-white text-black p-6 text-center text-lg">
        <div className="container mx-auto py-10 space-y-6">
          <h1 className="text-5xl">Personalized Workouts for<br /> Women, By Women</h1>
          <p className="mt-4 text-gray-600">Discover expert-curated workouts tailored to your goals. From abs to full-body strength, find your perfect fitness routine with guidance from certified female trainers.</p>
          <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleStartJourney}
            disabled={!name}
            className="bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition duration-300 md:w-auto disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            Start Your Fitness Journey
          </button>
        </div>
      </div>

      {/* Call to Action Section (bottom of the page) */}
      <div className="bg-white text-black py-12 text-center border-t border-gray-200">
       <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Transform Your Fitness Journey?</h3>
       <p className="text-gray-600 mb-4 max-w-xl mx-auto">
        Join thousands of women who have already discovered their perfect workout routine. Start your personalized fitness experience today.</p>
       <button className="bg-black text-white py-2 px-8 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          onClick={handleStartJourney}
          disabled={!name}
       >Get Started Now</button>
      </div>
       {/* Footer Section */}
      <footer className="bg-white text-gray-400 px-4 py-6 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">FitGirlsTracker</div>
          <p className="mt-2 md:mt-0 text-sm">Empowering women through personalized fitness experiences.</p>
        </div>
      </footer>
    </>
  )
}














export default HomePage;