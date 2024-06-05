import React from 'react';
import { Link } from 'react-router-dom';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider } from 'antd';
import './home.css'

const colors1 = ['#6253E1', '#04BEFE'];
const colors3 = ['#fcb7b7','#f3decb'];
const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

export default function Home(){
    return(
        <div className="fullPage row-center col-center bgGradient">
            <div className="home-container row-center col-center" >
                <h2>欢迎使用问卷++系统</h2>
                {/*<p>请选择:</p>*/}
                <p>
                    <Link to="/login">
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                        lineWidth: 0,
                                    },
                                },
                            }}
                        >
                            <Button type="primary" size="large" style={{height: '50px', width: '200px',fontSize:'large'}}>
                                登录
                            </Button>
                        </ConfigProvider></Link>
                </p>
                <p>
                    <Link to="/register">
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                                        colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                        colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                        lineWidth: 0,
                                    },
                                },
                            }}
                        >
                            <Button type="primary" size="large" style={{height: '50px', width: '200px',fontSize:'large'}}>
                                注册
                            </Button>
                        </ConfigProvider>
                    </Link>
                </p>
            </div>
        </div>
    )
}