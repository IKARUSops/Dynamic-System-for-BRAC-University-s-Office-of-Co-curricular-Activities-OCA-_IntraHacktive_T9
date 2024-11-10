import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests

const ClubLogin = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // State to manage error messages

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the backend API for login
            const response = await axios.post('http://localhost:5050/api/login/club', {
                username,
                password,
            });

            // If login is successful, store the token in localStorage (or handle it however you like)
            const { token, user } = response.data;
            localStorage.setItem('token', token);  // Store JWT in localStorage
            onLogin(true);  // Notify parent component about successful login

            // Optionally, save user details to localStorage or Context API if you want to persist user state
            localStorage.setItem('user', JSON.stringify(user));

        } catch (error) {
            // Handle errors such as incorrect username or password
            if (error.response) {
                // Server responded with an error
                setError(error.response.data.message);
            } else {
                // Network or other errors
                setError('An error occurred. Please try again later.');
            }
            onLogin(false);  // Notify parent component about failed login
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="background"></div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm tile-background">
                <img
                    alt="Your Company"
                    src="https://www.bracu.ac.bd/sites/default/files/resources/media/bracu_logo.png"
                    className="mx-auto h-20 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your Club account
                </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm mt-2">{error}</div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClubLogin;
