import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <h2>欢迎来到调查问卷系统</h2>
                <button onClick={() => navigate('/new-survey')}>新建问卷</button>
                <button onClick={() => navigate('/survey-history')}>历史问卷</button>
            </div>
        </div>
    );
}

export default Dashboard;


