import ExpertPostForm from '../CoreStructure/ExpertPostForm'; // Import the form component

const PostWorkoutPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen py-12'>
      <div className='container mx-auto max-w-2xl'>
        <ExpertPostForm />
      </div>
    </div>
  );
};

export default PostWorkoutPage;