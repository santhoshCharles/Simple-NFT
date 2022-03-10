import { Form, Input, InputNumber, Button, Modal } from 'antd';
import { addGenersApi, editGenersApi } from "../store/action";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import React from 'react';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function AddGeners(props) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { selectedGenres, genresId, header, showModel, closePopup } = props;

  useEffect(() => {
    if(Object.keys(selectedGenres).length !== 0) {
      form.setFieldsValue({
        name: selectedGenres.Title,
      });
      form.setFieldsValue({
        introduction: selectedGenres.des,
      });
    }
  },[props]);
  
  const onFinish = (values) => {
    if(Object.keys(selectedGenres).length === 0) {
      dispatch(addGenersApi({Title: values.name, des: values.introduction, id: genresId }));
    } else {
      dispatch(editGenersApi({Title: values.name, des: values.introduction, id: genresId }));
    }
    form.setFieldsValue({
      name: '',
    });
    form.setFieldsValue({
      introduction: '',
    });
    closePopup();
  };

  return (
    <Modal title={header} visible={showModel} onOk={()=>{}} onCancel={closePopup} footer={null} getContainer={false}>
    <Form {...layout} onFinish={onFinish} validateMessages={validateMessages} form={form} >
      <Form.Item name='name' label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='introduction' label="Description">
        <Input.TextArea />
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

export default React.memo(AddGeners);