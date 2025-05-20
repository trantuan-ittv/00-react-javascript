import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { loginApi } from '../util/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

const LoginPage = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext);
    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginApi(email, password);
    
        if(res && res.EC === 0){
            localStorage.setItem("access_token", res.access_token) // luu acces_token dc tra ve tu backend vao localstorage de dung sau nay
            notification.success({
                message: "LOGIN USER",
                description: "Success"
            })
            setAuth({
                isAuthenticated: true,
                user: {
                    email: res?.user?.email ?? "",
                    name: res?.user?.name ?? ""
                }
            })
            navigate("/")       //neu thanh cong chuyen huong home /
        }else {
            notification.error({
                message: "LOGIN USER",
                description: res?.EM ?? "error"    // neu cos gia tri cua EM thi in ra nguoc lai lay gia tri mac dinh la error
            })
        }
        console.log('>>> Success:', res);
       };
    return (
        <div style={{ margin: 50}}>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your email!',
                    },
                    ]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                    ]}
                >
                <Input.Password />
                </Form.Item>

                
                <Form.Item
                    
                >
                <Button type="primary" htmlType="submit">
                Login
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage;