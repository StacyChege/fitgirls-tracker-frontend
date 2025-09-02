import React, { useState, useEffect } from 'react';
import { FaHeart, FaDumbbell, FaClock } from 'react-icons/fa';
import WorkoutCard from '../CoreStructure/WorkoutCard';

const WorkoutListPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data to use as a fallback if the API is down
  const mockWorkouts = [
    {
      id: 1,
      title: 'Full Body HIIT',
      expert: 'Sarah Chen',
      duration: '30 min',
      difficulty: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2fcdb467e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'A high-intensity interval training routine to torch calories and build strength.',
      is_expert_created: true,
      tags: ['HIIT', 'Full Body', 'Cardio']
    },
    {
      id: 2,
      title: 'Strength & Core',
      expert: 'Maya Rodriguez',
      duration: '45 min',
      difficulty: 'Advanced',
      imageUrl: 'https://images.unsplash.com/photo-1534258958952-b7b55fbc40d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Focus on compound lifts and challenging core exercises to improve stability and power.',
      is_expert_created: true,
      tags: ['Strength', 'Core', 'Lifting']
    },
    {
      id: 3,
      title: 'Yoga Flow',
      expert: 'Alex Kim',
      duration: '60 min',
      difficulty: 'Beginner',
      imageUrl: 'https://images.unsplash.com/photo-1544367500-e7de2c63ef26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'A gentle Vinyasa flow to increase flexibility, balance, and mindfulness.',
      is_expert_created: true,
      tags: ['Yoga', 'Flexibility', 'Mindfulness']
    },
    {
      id: 4,
      title: 'Cardio Blast',
      expert: 'Lisa Thompson',
      duration: '20 min',
      difficulty: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1574680096145-af47395e8656?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Quick and effective cardio circuits to get your heart rate up.',
      is_expert_created: true,
      tags: ['Cardio', 'Endurance', 'Short']
    }
  ];

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/workouts/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setWorkouts(data);
        setLoading(false);
      } catch (err) {
        // Fallback to mock data if the API request fails
        console.warn("API fetch failed. Using mock data as a fallback.");
        setWorkouts(mockWorkouts);
        setError(null); // Clear any previous error
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading workouts...</div>;

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto max-w-7xl p-6 space-y-8">
        <section className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Workout Library
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore a variety of workouts designed by our expert trainers. Find the perfect routine for your goals.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutListPage;