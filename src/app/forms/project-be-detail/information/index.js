import React from 'react';
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input, Radio, Space} from 'antd';
import {Well} from "../../../components/common/Well";
import {accountData} from "../../../components/mocks";
import {infoModal} from "../../../components/modals";
import {UploadImage} from "../../../components/common/UploadImage";

export const InformationForm = () => {
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    infoModal();
    console.log('Success:', values);
  };

  const onFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onClear = () => {
    form.resetFields();
  };

  return (
    <Well header={'General information'}>
      <Form
        layout="vertical"
        name="basic"
        autoComplete="off"
        initialValues={accountData}
        onFinish={onSubmit}
        onFinishFailed={onFailed}
        footer={null}
      >
        <div className={'divide-layout'}>
          <div className={'flex-item-left'}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                }
              ]}
            ><Input/></Form.Item>
            <Form.Item label="Middle Name" name="middleName"><Input/></Form.Item>
            <Form.Item label="Family Name" name="familyName"><Input/></Form.Item>
            <Form.Item label="Male/Female" name="gender">
              <Radio>Male</Radio>
              <Radio defaultChecked>Female</Radio>
            </Form.Item>
            <Form.Item label="I.D No." name="idNumber"><Input/></Form.Item>
            <Form.Item label="Date of Birth (dd/mm/yyyy)" name="birthDate">
              <DatePicker format={'DD/MM/YYYY'}/>
            </Form.Item>
            <Form.Item label="Place of Birth" name="birthPlace"><Input/></Form.Item>
            <Form.Item label="Address" name="address"><Input/></Form.Item>
            <Form.Item label="Hand Phone" name="handPhone"><Input/></Form.Item>
            <Form.Item label="Home Phone" name="homePhone"><Input/></Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Email is not a valid email!',
                }
              ]}
            ><Input/>
            </Form.Item>
            <Form.Item label="Profession" name="profession"><Input/></Form.Item>
            <Form.Item label="Height (cm)" name="height"><Input/></Form.Item>
            <Form.Item label="Weight (kg)" name="weight"><Input/></Form.Item>
            <Form.Item label="BMI (kg/m2)" name="bmi"><Input/></Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button type="primary" ghost onClick={onClear}>Clear</Button>
                <Button type="primary" danger>Cancel</Button>
              </Space>
            </Form.Item>
          </div>
          <div className={'flex-item-right'}>
            <UploadImage label={'Attach Personal Picture'}/>
            <UploadImage label={'A side ID card'}/>
            <UploadImage label={'B side ID card'}/>
          </div>
        </div>
      </Form>
      </Well>
  );
};
