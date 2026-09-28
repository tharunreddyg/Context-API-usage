import React, { useState } from 'react';
import UserContext from '../contexts/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = React.useContext(UserContext);

    const handleLogin = () => {
        setUser({ username, password });
    };
    return (
        <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;