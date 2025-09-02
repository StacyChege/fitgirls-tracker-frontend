import React, { useState, useEffect } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Helper component for trainer cards
const TrainerCard = ({ expert }) => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);

    const renderAvatar = () => {
        if (expert.image && !imageError) {
            return (
                <img
                    src={expert.image}
                    alt={expert.name}
                    className='w-24 h-24 rounded-full object-cover shadow-inner'
                    onError={() => setImageError(true)}
                />
            );
        } else {
            return (
                <div className='w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-5xl text-gray-700 shadow-inner'>
                    <FaUser />
                </div>
            );
        }
    };
    
    return (
        <div className='bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center text-center space-y-4'>
            <div className='relative'>
                {renderAvatar()}
                <div className='absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md'>
                    <div className='flex items-center text-yellow-500'>
                        <FaStar className='w-3 h-3' />
                        <span className='text-xs font-semibold ml-1 text-gray-800'>{expert.rating}</span>
                    </div>
                </div>
            </div>
            <h3 className='text-lg font-bold text-gray-900'>{expert.name}</h3>
            <p className='text-sm text-gray-600'>{expert.specialty}</p>
            <div className='flex justify-center gap-2 flex-wrap'>
                {expert.tags?.map(tag => (
                    <span key={tag} className='bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full'>
                        {tag}
                    </span>
                ))}
            </div>
            <div className='flex justify-around w-full text-xs text-gray-600'>
                <div className='text-center'>
                    <p className='font-bold text-gray-800'>{expert.experience}</p>
                    <p>Experience</p>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-gray-800'>{expert.clients}</p>
                    <p>Clients</p>
                </div>
            </div>
            <button
                onClick={() => navigate(`/experts/${expert.id}`)}
                className='bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 w-full'
            >
                Connect
            </button>
        </div>
    );
};

// Main component for the Experts page
const ExpertsPage = () => {
    const navigate = useNavigate();
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mock data for the experts
    const mockExperts = [
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

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const response = await fetch('https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/experts/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setExperts(data);
                setError(null);
            } catch (err) {
                // If API fails, fall back to mock data
                setExperts(mockExperts);
                setError(null);
                console.warn("API call failed. Using mock data as a fallback.");
            } finally {
                setLoading(false);
            }
        };
        fetchExperts();
    }, []);

    // Function to navigate to the expert signup page
    const handleExpertSignup = () => {
        navigate('/experts/signup');
    };

    // Takes us to the regular signup page
    const handleStartToday = () => {
        navigate('/signup');
    };
    
    return (
        <div className='bg-white text-gray-800 min-h-screen'>
            <div className='container mx-auto max-w-7xl p-6 space-y-12'>

                {/* Section 1: Header */}
                <section className='text-center py-10'>
                    <h1 className='text-4xl md:text-5xl font-extrabold mb-4 text-gray-900'>
                        Meet Our Expert Instructors
                    </h1>
                    <p className='text-gray-600 max-w-3xl mx-auto'>
                        Connect with certified female fitness professionals who understand your unique needs and goals. Each expert brings years of experience and specialized knowledge to help you succeed.
                    </p>
                </section>
                
                {/* Section for Expert Signup Call to Action */}
                <div className='bg-gray-100 rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center'>
                    <p className='text-gray-700 font-semibold mb-4'>
                        Are you a verified expert?
                    </p>
                    <button
                        onClick={handleExpertSignup}
                        className='bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-900 transition duration-300'
                    >
                        Apply to be an Expert
                    </button>
                </div>

                {/* Section 2: Experts List */}
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10'>
                    {loading ? (
                        <div className="text-center p-10 col-span-full text-gray-800">Loading experts...</div>
                    ) : (
                        experts.map(expert => (
                            <TrainerCard key={expert.id} expert={expert} />
                        ))
                    )}
                </section>

                {/* Section 3: Final Call to Action */}
                <div className='bg-gray-100 rounded-lg shadow-md p-10 max-w-3xl mx-auto text-center'>
                    <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                        Ready to Start Your Fitness Journey?
                    </h2>
                    <p className='text-gray-600 mb-6'>
                        Get access to personalized workout plans, expert tips, and direct interaction with our certified trainers. Join thousands of women who are already transforming their fitness journey.
                    </p>
                    <div className='flex justify-center gap-4'>
                        <button
                            onClick={handleStartToday}
                            className='bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-900 transition duration-300'
                        >
                            Start Free Today
                        </button>
                        <button className='bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-300 hover:bg-gray-50 transition duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertsPage;