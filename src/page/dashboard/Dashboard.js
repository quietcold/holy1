import React from 'react';
import {useNavigate} from 'react-router-dom';
import './dashboard.css';
import {Button, Flex} from "antd";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="fullPage row-center col-center bgGradient">
            <div className="dashboard-container">
                <Flex
                    vertical
                    gap="large"
                    style={{
                        width: '100%',
                    }}
                >
                    <h2>欢迎来到调查问卷系统</h2>
                    <Button type="primary" block onClick={() => navigate('/new-survey')} style={{height: '50px',fontSize:'large'}}>
                        新建问卷
                    </Button>
                    <Button  block onClick={() => navigate('/survey-history')} style={{height: '50px',fontSize:'large'}}>
                        历史问卷
                    </Button>
                </Flex>`
            </div>
        </div>
    );
}

export default Dashboard;