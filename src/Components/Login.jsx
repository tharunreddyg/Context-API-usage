import React, { useState } from 'react';
import UserContext from '../contexts/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = React.useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            >
                <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
                    Welcome Back
                </h2>

                <p className="mb-8 text-center text-sm text-gray-500">
                    Login to your account
                </p>

                {/* Username */}
                <div className="mb-5">
                    <label
                        htmlFor="username"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        Username
                    </label>

                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        required
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;