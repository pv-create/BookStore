import React, {FC} from 'react';
import {Card, Row} from "antd";
import LoginForm from "./LoginForm";
const Login: FC = () => {
    return (
        <Row justify="center" align="middle" className="h100">
            <Card>
                <LoginForm/>
            </Card>
        </Row>
    );
};

export default Login;
