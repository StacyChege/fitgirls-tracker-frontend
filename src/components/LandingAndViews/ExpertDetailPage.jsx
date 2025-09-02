import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaUser, FaArrowLeft } from 'react-icons/fa';

// Mock data (same as on ExpertsPage)
const experts = [
    {
      id: 1,
      name: 'Sarah Chen',
      specialty: 'HIIT & Core Specialist',
      experience: '8+ years',
      clients: '500+',
      rating: 4.9,
      tags: ['HIIT Training', 'Core Strengthening'],
      image: 'https://images.unsplash.com/photo-1579758509425-a13101347071?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Maya Rodriguez',
      specialty: 'Strength & Conditioning',
      experience: '10+ years',
      clients: '750+',
      rating: 4.8,
      tags: ['Strength Training', 'Olympic Lifting'],
      image: 'https://images.unsplash.com/photo-1549476008-8e6840d04c0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Zoe Williams',
      specialty: 'Nutrition & Recovery',
      experience: '6+ years',
      clients: '400+',
      rating: 4.9,
      tags: ['Nutrition Planning', 'Recovery Optimization'],
      image: 'https://images.unsplash.com/photo-1522896504547-06834b790d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Alex Kim',
      specialty: 'Yoga & Flexibility',
      experience: '7+ years',
      clients: '600+',
      rating: 4.9,
      tags: ['Hatha Yoga', 'Flexibility Training'],
      image: 'https://images.unsplash.com/photo-1506847427878-b3d410766e4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      specialty: 'Cardio & Endurance',
      experience: '9+ years',
      clients: '800+',
      rating: 4.7,
      tags: ['Cardio Training', 'Running Technique'],
      image: 'https://images.unsplash.com/photo-1517578496478-f73ac8b0024f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 6,
      name: 'Jordan Martinez',
      specialty: 'Postnatal & Prenatal Fitness',
      experience: '5+ years',
      clients: '300+',
      rating: 5,
      tags: ['Prenatal Fitness', 'Postpartum Recovery'],
      image: 'https://images.unsplash.com/photo-1594833246395-6494f4b2a9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
];


const ExpertDetailPage = () => {
    // Get the expertId from the URL
    const { expertId } = useParams();
    const navigate = useNavigate();

    // Find the expert that matches the URL ID
    const expert = experts.find(e => e.id === parseInt(expertId));

    // If no expert is found, show a message
    if (!expert) {
        return (
            <div className='text-center p-10 text-gray-800'>
                <h1 className='text-3xl font-bold'>Expert Not Found</h1>
                <p className='mt-2'>The expert you are looking for does not exist.</p>
                <button
                    onClick={() => navigate('/experts')}
                    className='mt-4 bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg'
                >
                    Go Back to Experts
                </button>
            </div>
        );
    }

    // Fallback for avatar
    const renderAvatar = () => {
      return expert.image ? (
        <img
          src={expert.image}
          alt={expert.name}
          className='w-40 h-40 rounded-full object-cover shadow-lg mx-auto'
        />
      ) : (
        <div className='w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-7xl text-gray-700 shadow-lg mx-auto'>
          <FaUser />
        </div>
      );
    };


    return (
        <div className='bg-white text-gray-800 min-h-screen'>
            <div className='container mx-auto max-w-4xl p-6'>
                <button onClick={() => navigate(-1)} className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition duration-300 mb-6'>
                    <FaArrowLeft /> Back to all experts
                </button>
                <div className='text-center py-10'>
                    {renderAvatar()}
                    <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mt-6'>
                        {expert.name}
                    </h1>
                    <p className='text-gray-600 text-xl mt-2'>{expert.specialty}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <p className='text-xl font-bold'>{expert.clients}</p>
                        <p className='text-gray-600 text-sm mt-1'>Clients</p>
                    </div>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <p className='text-xl font-bold'>{expert.experience}</p>
                        <p className='text-gray-600 text-sm mt-1'>Experience</p>
                    </div>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <div className='flex items-center justify-center gap-2 text-yellow-500'>
                          <FaStar className='w-5 h-5' />
                          <p className='text-xl font-bold'>{expert.rating}</p>
                        </div>
                        <p className='text-gray-600 text-sm mt-1'>Average Rating</p>
                    </div>
                </div>
                <div className='mt-8 text-center'>
                    <h2 className='text-2xl font-bold mb-4'>Areas of Expertise</h2>
                    <div className='flex justify-center gap-2 flex-wrap'>
                        {expert.tags.map(tag => (
                            <span key={tag} className='bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Placeholder for more content like an 'About Me' section or contact info */}
                <div className='mt-10 p-6 bg-gray-50 rounded-lg'>
                  <p className='text-gray-700 leading-relaxed'>
                    {expert.name} specializes in helping women achieve their fitness goals through a holistic approach. Their programs focus on long-term sustainability and healthy habit formation. Whether you're a beginner or an experienced athlete, {expert.name} is dedicated to providing the guidance and support you need.
                  </p>
                </div>
            </div>
        </div>
    );
};

export default ExpertDetailPage;