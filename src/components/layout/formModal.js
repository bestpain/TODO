import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../index.css';
import { Button, Modal, Form, Input } from 'antd';
import {createBucket} from '../../actions'
import {connect} from 'react-redux'


const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  
  class extends React.Component {
      render() {
              const { visible, onCancel, onCreate, form } = this.props;
              const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new Bucket"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                   <Form.Item label="Title">
                     {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input the title of Bucket!' }],
                        })(<Input />)}
                   </Form.Item>
                </Form>
          </Modal>
        );
    }
  },
);

class FormModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.createBucket(values.title)
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create New Bucket
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default connect(null,{createBucket})(FormModal);
ReactDOM.render(<FormModal />, document.getElementById('root'));
          