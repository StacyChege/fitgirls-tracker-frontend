import React, { useState } from 'react';

const ExpertPostForm = () => {
  // We use `useState` to keep track of what the expert types into the form.
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: '',
    goal: '',
    image: '',
  });

  // This function updates the `formData` state every time a field changes.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function handles what happens when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // This stops the page from reloading.
    console.log('Form data submitted:', formData);
    // TODO: Later, we'll send this data to the API to create a new workout post.
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto my-12'>
      <h2 className='text-3xl font-bold text-center mb-6'>Create a New Workout Routine</h2>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Input field for the workout title */}
        <div>
          <label htmlFor='title' className='block text-gray-700 font-semibold mb-2'>Workout Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
            required
          />
        </div>

        {/* Text area for the workout description */}
        <div>
          <label htmlFor='description' className='block text-gray-700 font-semibold mb-2'>Description</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows='4'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
            required
          ></textarea>
        </div>

        {/* Dropdown for selecting difficulty level */}
        <div>
          <label htmlFor='difficulty' className='block text-gray-700 font-semibold mb-2'>Difficulty</label>
          <select
            id='difficulty'
            name='difficulty'
            value={formData.difficulty}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
            required
          >
            <option value=''>Select Difficulty</option>
            <option value='beginner'>Beginner</option>
            <option value='intermediate'>Intermediate</option>
            <option value='advanced'>Advanced</option>
          </select>
        </div>

        {/* Dropdown for selecting the goal */}
        <div>
          <label htmlFor='goal' className='block text-gray-700 font-semibold mb-2'>Goal</label>
          <select
            id='goal'
            name='goal'
            value={formData.goal}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
            required
          >
            <option value=''>Select Goal</option>
            <option value='cardio'>Cardio & Endurance</option>
            <option value='strength'>Strength</option>
            <option value='flexibility'>Flexibility</option>
            {/* Add more goals as needed */}
          </select>
        </div>

        {/* Input for the image URL */}
        <div>
          <label htmlFor='image' className='block text-gray-700 font-semibold mb-2'>Image URL</label>
          <input
            type='url'
            id='image'
            name='image'
            value={formData.image}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
            placeholder='e.g., https://images.unsplash.com/photo-...'
            required
          />
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='w-full bg-gray-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-900 transition duration-300'
        >
          Post Workout
        </button>
      </form>
    </div>
  );
};

export default ExpertPostForm;