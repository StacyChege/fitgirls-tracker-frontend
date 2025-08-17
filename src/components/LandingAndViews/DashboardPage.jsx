// src/components/LandingAndViews/DashboardPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const DashboardPage = () => {
  const { name } = useParams();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center">Hello, {name}! This is the Dashboard Page.</h1>
    </div>
  );
};

export default DashboardPage;