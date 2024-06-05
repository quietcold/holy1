import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 发送请求到后端 API
        const response = await fetch('http://127.0.0.1:4523/m1/4584133-4233190-default/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok && result.id) {
            // 登录成功
            setLoginStatus('登录成功');
            setTimeout(() => {
                navigate('/dashboard'); // 导航到控制面板页面
            }, 1000);
        } else {
            // 登录失败
            setLoginStatus('登录失败：用户名或密码无效');
        }
    };

    return (
        <div className="container">
            <h2>登录</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">登录</button>
            </form>
            {loginStatus && <p>{loginStatus}</p>}
            <button onClick={() => navigate('/')}>返回</button>
        </div>
    );
}

export default Login;



