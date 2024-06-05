import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Dashboard from "./page/dashboard/Dashboard";
import NewSurvey from "./page/new-survey/NewSurvey";
import SurveyHistory from "./page/survey-history/SurveyHistory";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/new-survey" element={<NewSurvey/>}/>
                <Route path="/survey-history" element={<SurveyHistory/>}/>
            </Routes>
        </Router>)
}

export default AppRouter;
