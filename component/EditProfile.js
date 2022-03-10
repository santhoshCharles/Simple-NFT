import { Form, Input, InputNumber, Button, Modal } from 'antd';
import {editProfileApi} from "../store/action";
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function EditProfile(props) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { selectedGenres, genresId, header, showModel, closePopup } = props;

  useEffect(() => {
    if(Object.keys(selectedGenres).length !== 0) {
      form.setFieldsValue({
        firstName: selectedGenres.firstName,
      });
      form.setFieldsValue({
        lastName: selectedGenres.lastName,
      });
      form.setFieldsValue({
        phone: selectedGenres.mobileNumber,
      });
      form.setFieldsValue({
        email: selectedGenres.email,
      });
    }
    
  },[props]);
  
  const onFinish = (values) => {
      console.log('values', values)
      dispatch(editProfileApi(values));
      console.log(values)
    
  };

  return (
    <Modal title={header} visible={showModel} onOk={()=>{}} onCancel={closePopup} footer={null} getContainer={false}>
    <Form {...layout} onFinish={onFinish} form={form} >
      <Form.Item name='firstName' label="Title" rules={[{ required: true,  message: "Please input your first name!"  }]}>
        <Input />
      </Form.Item>
      <Form.Item name='lastName' label="Title" rules={[{ required: true, message: "Please input your last name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name='email' label="Email">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 20 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Modal>
  );
};

export default React.memo(EditProfile);