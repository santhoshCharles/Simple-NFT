import React,{useEffect} from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import Header from "../../component/Header";
import styled from "styled-components";
import { success, error } from "../../component/Messages";
import { useRouter } from 'next/router';
import { ADMIN } from "../../constant/Constant";
import { loginApi } from "../../store/action";
import { useSelector, useDispatch, connect } from "react-redux";
 
const LoginWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;

const Login = (props) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginApi({email: values.email, password: values.password }))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  useEffect(()=>{
    console.log('seeffect', props.reducers, Object.keys(props.reducers.loginDetails))
    if(Object.keys(props.reducers.loginDetails).length > 0) {
           router.push({ pathname: '/Dashboard',
        query: { user: 'admin' }});
    }
  }, [props.reducers.loginDetails])

  return (
    <>
      <Header page={"Login"} windowheight={'100%'}>
      <LoginWrapper>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }, { type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </LoginWrapper>
      </Header>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default  connect(mapStateToProps)(Login);
