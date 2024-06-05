import React, {useState} from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import {useNavigate} from 'react-router-dom';
import "./login.css"


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
            body: JSON.stringify({username, password}),
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
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="fullPage row-center col-center bgGradient">
            <div className='login-container'>
                <h2>登录</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"
                               style={{width: "300px", height: "50px"}}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            style={{width: "300px", height: "50px"}}
                        />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                    Or <a href="/register">register now!</a>
                </Form>
            </div>
        </div>
    );
}

export default Login;



