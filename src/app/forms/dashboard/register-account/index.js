import React from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input, Radio, Space} from 'antd';
import {Well} from "../../../components/common/Well";
import {accountData} from "../../../components/mocks";
import {infoModal} from "../../../components/modals";
import {UploadImage} from "../../../components/common/UploadImage";

export const RegisterAccountForm = () => {
  const prefix = 'forms.dashboard.registerAccount.labels';
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
    <Well header={i18next.t(prefix + '.headers.generalInfo')}>
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
            <Form.Item label={i18next.t(prefix + '.name')} name={'name'}
              rules={[
                {
                  required: true,
                  message: i18next.t(prefix + '.validates.required'),
                }
              ]}
            ><Input /></Form.Item>
            <Form.Item label={i18next.t(prefix + '.middleName')} name="middleName">
              <Input/>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + '.lastName')} name="lastName"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.gender')} name="gender">
              <Radio>{i18next.t(prefix + '.male')}</Radio>
              <Radio>{i18next.t(prefix + '.female')}</Radio>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + '.identificationNumber')} name="identificationNumber">
              <Input/>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + '.birthDate')} name="birthDate">
              <DatePicker format={'DD/MM/YYYY'}/>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + '.birthPlace')} name="birthPlace"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.address')} name="address"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.cellPhone')} name="cellPhone"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.homePhone')} name="homePhone"><Input/></Form.Item>
            <Form.Item
              label={i18next.t(prefix + '.email')}
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Email is not a valid email!',
                }
              ]}
            ><Input/>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + '.profession')} name="profession"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.height')} name="height"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.weight')} name="weight"><Input/></Form.Item>
            <Form.Item label={i18next.t(prefix + '.bmi')} name="bmi"><Input/></Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">{i18next.t(prefix + '.buttons.submit')}</Button>
                <Button type="primary" ghost onClick={onClear}>{i18next.t(prefix + '.buttons.clear')}</Button>
                <Button type="primary" danger>{i18next.t(prefix + '.buttons.cancel')}</Button>
              </Space>
            </Form.Item>
          </div>
          <div className={'flex-item-right'}>
            <UploadImage label={i18next.t(prefix + '.upload1')}/>
            <UploadImage label={i18next.t(prefix + '.upload2')}/>
            <UploadImage label={i18next.t(prefix + '.upload3')}/>
          </div>
        </div>
      </Form>
      </Well>
  );
};
