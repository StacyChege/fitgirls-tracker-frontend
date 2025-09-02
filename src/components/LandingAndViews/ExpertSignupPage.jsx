import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpertSignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

  const handleExpertSignup = async (e) => {
    e.preventDefault();

    // --- TEMPORARY: Skipping API call and simulating signup ---
    // In a real app, you would send this data to a backend API endpoint
    // specifically for expert registration.
    console.log("Simulating expert sign-up. Redirecting to login page.");
    console.log("Expert Data:", { username, email, specialty, experience });
    
    // For testing, let's also set a flag in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('is_expert', 'true');
    
    navigate('/login');
    // You will need to add your API call here later, e.g., to:
    // https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/experts/register/
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="p-8 max-w-sm w-full space-y-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Expert Sign Up</h2>
        <form onSubmit={handleExpertSignup} className="space-y-4">
          {/* User Account Fields */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          
          {/* Expert-Specific Fields */}
          <div>
            <label className="text-sm font-medium text-gray-700">Specialty</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Years of Experience</label>
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300"
          >
            Sign Up as an Expert
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertSignupPage;