import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch is replaced by Routes
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignupForm />} /> {/* Root path renders SignupForm */}
                <Route path="/login" element={<LoginForm />} /> {/* Login path renders LoginForm */}
                <Route path="/Dashboard" element={<Dashboard />} /> {/* Dashboard path renders Dashboard */}
            </Routes>
        </Router>
    );
};

export default App;
