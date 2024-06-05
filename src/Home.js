import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h2>欢迎使用问卷系统</h2>
            <p>请选择:</p>
            <Link to="/login"><button>登录</button></Link>
            <Link to="/register"><button>注册</button></Link>
        </div>
    );
}

export default Home;
