import React from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import { Button, Col, Form, Input, Radio, Row, Space } from 'antd';
import { Well } from '../../../components/common/Well';
import { accountData } from '../../../components/mocks';
import { infoModal } from '../../../components/modals';
import avatar from '../../../images/avatar.png';

export const HabitForm = () => {
  const prefix = 'forms.dashboard.habit.labels.';
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
    <Well header={i18next.t(prefix + 'headers.habit')}>
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
            <Form.Item label={i18next.t(prefix + 'smoking.label')} name="smoking">
              <Radio>{i18next.t(prefix + 'smoking.option1')}</Radio>
              <Radio>{i18next.t(prefix + 'smoking.option2')}</Radio>
              <Radio>{i18next.t(prefix + 'smoking.option3')}</Radio>
              <Radio>{i18next.t(prefix + 'smoking.option4')}</Radio>
              <Radio>{i18next.t(prefix + 'smoking.option5')}</Radio>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + 'drink.label')} name="drink">
              <Radio>{i18next.t(prefix + 'drink.option1')}</Radio>
              <Radio>{i18next.t(prefix + 'drink.option2')}</Radio>
              <Radio>{i18next.t(prefix + 'drink.option3')}</Radio>
              <Radio>{i18next.t(prefix + 'drink.option4')}</Radio>
            </Form.Item>
            <Form.Item label={i18next.t(prefix + 'others.label')} name="others">
              <Radio>{i18next.t(prefix + 'others.option1')}</Radio>
              <Radio>{i18next.t(prefix + 'others.option2')}</Radio>
            </Form.Item>
            <Form.Item label="Hoạt động thể thao" name="sport">
              <Row>
                <Col span={11}>
                  <Form.Item label="Tên hoạt động" name="nameSport"><Input/></Form.Item>
                </Col>
                <Col span={12} offset={1}>
                  <Form.Item label="Tần suất/ngày" name="frequency"><Input/></Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">{i18next.t(prefix + 'buttons.submit')}</Button>
                <Button type="primary" ghost onClick={onClear}>{i18next.t(prefix + 'buttons.clear')}</Button>
                <Button type="primary" danger>{i18next.t(prefix + 'buttons.cancel')}</Button>
              </Space>
            </Form.Item>
          </div>
          <div className={'flex-item-right'}>
            <img alt={'avatar'} height={175} width={175} src={avatar} />
            <div style={{marginTop: 10, marginButton: 5}}><span>{'Lê Thành Nam'}</span></div>
            <span>{i18next.t(prefix + 'avatar.code')}</span><span style={{color: 'red', fontWeight: 'bold', marginLeft: 10}}>{'21-035M'}</span>
          </div>
        </div>
      </Form>
      </Well>
  );
};
