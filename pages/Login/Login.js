import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import Header from "../../component/Header";
import styled from "styled-components";
import { success, error } from "../../component/Messages";
import { useRouter } from 'next/router';
import { ADMIN } from "../../constant/Constant";
 
const LoginWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: 15%;
`;

const Login = () => {
    const router = useRouter()
  const onFinish = (values) => {
    console.log("Success:", values);
    //localStorage.setItem("admin", JSON.stringify(values));
    if(values.email === ADMIN.email && values.password === ADMIN.password) {
        success('Success')
        router.push({ pathname: '/Dashboard',
        query: { user: 'admin' }});
    } else {
        error('Error')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header page={"Login"} >
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

export default Login;
