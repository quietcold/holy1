import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Button,
    Form,
    Input,
} from 'antd';
import "./register.css"

function Register() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/dashboard')
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
                        name="usename"
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