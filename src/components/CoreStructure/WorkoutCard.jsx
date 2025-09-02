import React, { useState } from 'react';
import { FaDumbbell, FaClock, FaCheckCircle, FaSave, FaHeart, FaComment } from 'react-icons/fa';

const WorkoutCard = ({ workout }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
        // Add API call to save the workout here
    };

    const handleCompleteClick = () => {
        setIsCompleted(!isCompleted);
        // Add API call to mark the workout as complete here
    };

    const handleLikeClick = (e) => {
        e.stopPropagation();
        // Add API call to post a like here
        console.log(`User wants to like workout with ID: ${workout.id}`);
    };

    const handleCommentClick = (e) => {
        e.stopPropagation();
        // Add API call to post a comment here or navigate to a dedicated page
        console.log(`User wants to comment on workout with ID: ${workout.id}`);
    };

    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-6 space-y-4">
            {/* Placeholder for workout image */}
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                No Image Available
            </div>
            
            <div className="flex justify-between items-center text-gray-600">
                <div className="flex items-center space-x-2">
                    <FaDumbbell className="text-gray-500" />
                    <span className="text-sm">{workout.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    {/* Duration not available in your API */}
                    <span className="text-sm">N/A</span> 
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{workout.title}</h3>
            <p className="text-sm text-gray-600">Goal: {workout.goal}</p>

            {/* Likes and Comments section */}
            <div className="flex justify-between items-center text-gray-600 border-t pt-4 border-gray-300">
                <div 
                    onClick={handleLikeClick}
                    className="flex items-center space-x-2 cursor-pointer hover:text-red-500 transition-colors"
                >
                    <FaHeart />
                    <span className="text-sm font-semibold">N/A Likes</span>
                </div>
                <div 
                    onClick={handleCommentClick}
                    className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 transition-colors"
                >
                    <FaComment />
                    <span className="text-sm font-semibold">N/A Comments</span>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-4">
                <button
                    onClick={handleSaveClick}
                    className={`flex-1 py-2 rounded-lg transition-colors duration-300 ${isSaved ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                >
                    <div className="flex items-center justify-center space-x-2">
                        <FaSave />
                        <span>{isSaved ? 'Saved!' : 'Save'}</span>
                    </div>
                </button>
                <button
                    onClick={handleCompleteClick}
                    className={`flex-1 py-2 rounded-lg transition-colors duration-300 ${isCompleted ? 'bg-green-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                >
                    <div className="flex items-center justify-center space-x-2">
                        <FaCheckCircle />
                        <span>{isCompleted ? 'Completed!' : 'Complete'}</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default WorkoutCard;