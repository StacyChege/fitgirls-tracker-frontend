import React from 'react';
import { FaHeart, FaCertificate, FaUsers, FaChartLine, FaCheckCircle, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleGetStarted = () => {
    navigate('/');
  };

  return (
    <div className='bg-white text-gray-800 min-h-screen'>
      <div className='container mx-auto max-w-7xl p-6 space-y-12'>

        {/* Section 1: About FitGirlsTracker & Our Mission */}
        <section className='text-center py-10'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4 text-gray-900'>
            About FitGirlsTracker
          </h1>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            Empowering women through personalized fitness experiences. We believe every woman deserves access to expert guidance, supportive community, and workouts that fit her unique goals and lifestyle.
          </p>
          <div className='md:grid md:grid-cols-2 gap-12 mt-12 items-center'>
            <div className='text-left space-y-4'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Our Mission
              </h2>
              <p className='text-gray-600'>
                We're on a mission to make fitness accessible, enjoyable and effective for women everywhere. Too often, fitness content is created with a one-size-fits-all approach that doesn't consider the unique needs, challenges and goals that women face.
              </p>
              <p className='text-gray-600'>
                FitGirlsTracker bridges this gap by connecting women with certified female trainers who understand these challenges firsthand and create personalized solutions that actually work.
              </p>
            </div>
            <div className="mt-8 md:mt-0 p-8 bg-gray-100 rounded-lg shadow-inner">
              <div className='grid grid-cols-2 gap-8 text-center'>
                <StatBox icon={<FaChartLine />} number='10K+' text='Workouts Created' />
                <StatBox icon={<FaUsers />} number='50K+' text='Active Users' />
                <StatBox icon={<FaCertificate />} number='200+' text='Certified Experts' />
                <StatBox icon={<FaHeart />} number='95%' text='Satisfaction Rate' />
              </div>
            </div>
          </div>
        </section>

        <hr className=' border-gray-200' />

        {/* Section 2: Our Values & Team */}
        <section className='text-center py-10'>
          <h2 className='text-3xl md:text-4xl font-extrabold mb-8 text-gray-900'>
            Our Values
          </h2>
          {/* This is where we show core values using 'ValueCard' components. */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <ValueCard icon={<FaUser />} title="Inclusivity" description="Every woman, regardless of fitness level, body type, or experience, deserves to feel welcomed and supported in her fitness journey." />
            <ValueCard icon={<FaCheckCircle />} title="Expertise" description="All our trainers are certified professionals who bring real knowledge, experience, and evidence-based approaches to women's fitness." />
            <ValueCard icon={<FaHeart />} title="Community" description="Fitness is better together. We foster a supportive community where women can share experiences, celebrate victories, and motivate each other." />
          </div>

          <h2 className='text-3xl md:text-4xl font-extrabold mt-16 mb-8 text-gray-900'>
            Meet Our Founding Team
          </h2>
          {/* This is where we showcase our founding team members. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember name="Alex Johnson" role="Co-Founder & CEO" bio="Former fitness trainer with 10+ years of experience helping women achieve their health goals." />
            <TeamMember name="Sarah Martinez" role="Co-Founder & CTO" bio="Tech entrepreneur passionate about using technology to make fitness more accessible." />
            <TeamMember name="Maya Thompson" role="Head of Community" bio="Wellness coach dedicated to building supportive fitness communities for women." />
          </div>
        </section>

        <hr className='border-gray-200' />

        {/* Section 3: Final Call to Action */}
        <section className='text-center py-10'>
          <div className='bg-gray-100 rounded-lg shadow-md p-10 max-w-3xl mx-auto'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Ready to Start Your Journey?
            </h2>
            <p className='text-gray-600 mb-6'>
              Join thousands of women who have already transformed their relationship with fitness. Whether you're just starting out or looking to level up, we're here to support you every step of the way.
            </p>
            <button
              onClick={handleGetStarted}
              className='bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-900 transition duration-300'
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

// Helper components to keep the main code clean
const StatBox = ({ icon, number, text }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl mb-2">{icon}</div>
    <p className="text-2xl font-bold">{number}</p>
    <p className="text-gray-500">{text}</p>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 rounded-lg shadow p-8 space-y-4">
    <div className="text-2xl text-gray-600 mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const TeamMember = ({ name, role, bio }) => (
  <div className="bg-gray-100 rounded-lg shadow p-8 space-y-2">
    <div className="h-16 w-16 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-700">
      {name.slice(0, 2).toUpperCase()}
    </div>
    <h3 className="text-lg font-bold mt-4">{name}</h3>
    <p className="text-sm font-semibold text-gray-600">{role}</p>
    <p className="text-gray-500 text-xs mt-2">{bio}</p>
  </div>
);