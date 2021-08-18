import React, { Component, createRef, useContext } from 'react';
import { Modal, Form, Input, message} from 'antd';
import { AuthContext } from 'context/AuthProvider';
import { addDocument, getDocument } from 'Firebase/services';
class ModalAddRooms extends Component {
  state = {
    isModalVisible:false,
  }

  formRef = createRef();

  showModal = () => {
    this.setState({isModalVisible:true})
  };

  handleOk = () => {
    this.formRef.current.submit();
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  onFinish = (values) => {
    const data = { ...values, members: [this.props.uid] };
    addDocument('rooms', data, ()=>this.setState({ isModalVisible: false }));
  }

  onFinishFailed = (err) => {
    console.log('error= ',err);
  }

  render() {
    return (
      <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed = {this.onFinishFailed}
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default ModalAddRooms;
