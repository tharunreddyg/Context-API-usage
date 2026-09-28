
import React, { useContext } from 'react';
import UserContext from '../contexts/userContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
                    <h2 className="mb-3 text-2xl font-bold text-gray-800">
                        Please Login
                    </h2>

                    <p className="text-gray-500">
                        You need to login to view your profile.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                    <span className="text-3xl font-bold text-indigo-600">
                        {user.username.charAt(0).toUpperCase()}
                    </span>
                </div>

                <h1 className="mb-2 text-3xl font-bold text-gray-800">
                    Welcome, {user.username}!
                </h1>

                <p className="text-gray-500">
                    You are successfully logged in.
                </p>
            </div>
        </div>
    );
}

export default Profile;
