import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Button,
    Form,
    Input, message,
} from 'antd';
import "./register.css"

const signup = async (username, password) => {
    const response = await fetch('http://110.64.89.20:8080/User/Signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error(`Sign up failed with status ${response.status}`);
    }

    return await response.json();
};

function Register() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [messageApi] = message.useMessage();
    const onFinish = (values) => {
        console.log('Register form: ', values);
        signup(values.username, values.password)
            .then((response) => {
                if (response.data.id) {
                    messageApi.open({
                        type: 'success',
                        content: '注册成功',
                    });
                    navigate('/dashboard');
                } else {
                    messageApi.open({
                        type: 'error',
                        content: '注册失败：用户名或密码无效',
                    });
                    console.log(response)
                }
            })
    };
    return (
        <div className="fullPage row-center col-center bgGradient">
            <div className='register-container'>
                <h2>注册</h2>
                <Form
                    layout='vertical'
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名！',
                                whitespace: true,
                            },
                        ]}
                        style={{width: "300px"}}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                        hasFeedback
                        style={{width: "300px"}}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认你的密码！',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不一致！'));
                                },
                            }),
                        ]}
                        style={{width: "300px"}}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item layout="inline">
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                        <a href="/login" className="login-form-forgot ">goto login</a>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};
export default Register;