import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // --- TEMPORARY: Skipping the API call for now ---
        // We'll just save the username and redirect.
        if (username) {
            localStorage.setItem('username', username);
            navigate('/dashboard');
        }
        // You will re-add your fetch call here later when the API is ready.
        // For example:
        /*
        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', { ... });
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('username', data.username);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
        */
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
            <div className="p-8 max-w-sm w-full space-y-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Log In</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;