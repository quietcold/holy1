import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Dashboard from './Dashboard';
import NewSurvey from './NewSurvey';
import SurveyHistory from './SurveyHistory';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/new-survey" element={<NewSurvey />} />
                    <Route path="/survey-history" element={<SurveyHistory />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

