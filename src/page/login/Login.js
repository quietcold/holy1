import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {useNavigate} from 'react-router-dom';
import "./login.css"

const login = async (username, password) => {
    const response = await fetch('http://110.64.89.20:8080/User/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`);
    }

    return await response.json();
};

function Login() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('login form:', values);
        login(values.username, values.password)
            .then((response) => {
                if (response.data.id) {
                    messageApi.open({
                        type: 'success',
                        content: '登录成功',
                    });
                    navigate('/dashboard');
                } else {
                    messageApi.open({
                        type: 'error',
                        content: '登录失败：用户名或密码无效',
                    });
                    console.log(response)
                }
            })
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



