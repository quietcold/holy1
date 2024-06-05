import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function Register() {
    const [username, setUsername] = useState(''); // 用户名状态
    const [password, setPassword] = useState(''); // 密码状态
    const navigate = useNavigate(); // 导航函数

    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止表单默认提交行为
        const response = await fetch('http://127.0.0.1:4523/m1/4584133-4233190-default/api/register', {
            method: 'POST', // 请求方法
            headers: {
                'Content-Type': 'application/json', // 设置请求头，指定发送的数据类型为 JSON
            },
            body: JSON.stringify({ username, password }), // 请求体，发送用户名和密码
        });

        if (response.ok) {
            // 注册成功，导航到登录页或首页
            console.log('注册成功');
            navigate('/'); // 导航到首页
        } else {
            // 处理注册错误
            console.error('注册失败');
        }
    };

    return (
        <div className="container">
            <h2>注册</h2>
            <form onSubmit={handleSubmit}> {/* 提交表单时调用 handleSubmit 函数 */}
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // 更新用户名状态
                    required
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // 更新密码状态
                    required
                />
                <button type="submit">注册</button>
            </form>
            <button onClick={() => navigate('/')}>返回</button>
        </div>
    );
}

export default Register;
