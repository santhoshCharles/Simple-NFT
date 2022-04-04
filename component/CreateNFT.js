import { Form, Input, InputNumber, Button, Modal } from "antd";
import { editProfileApi } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function CreateNFT(props) {
  //const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { selectedGenres, genresId, header, showModel, closePopup, onMintPressed } = props;
  const userType = useSelector( state => state.reducers.loginDetails );

  const onFinish = (values) => {
    onMintPressed({...values, userType: userType.type, userName: userType.userName, email: userType.email });
  };

  return (
    <Modal
      title={"Create NFT"}
      visible={showModel}
      onOk={() => {}}
      onCancel={closePopup}
      footer={null}
      getContainer={false}
    >
      <Form {...layout} onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please input your Price Amount!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Image Link"
          rules={[{ required: true, message: "Please input your Image link!" }]}
        >
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
}

export default React.memo(CreateNFT);
