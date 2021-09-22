import React from 'react';
import 'antd/dist/antd.css';
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, Space } from 'antd';
import { Well } from '../../../../../components/common/Well';
import { YoutubeOutlined, SnippetsOutlined } from '@ant-design/icons';

export const NewProjectInformation = () => {
  const handleChange = (value) => ({

  });

  const select = (
    <Select defaultValue="mg" className="select-after">
      <Select.Option value="mg">mg</Select.Option>
      <Select.Option value="gram">gram</Select.Option>
    </Select>
  );

  return (<Well >
    <Form layout={'vertical'}>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={() => handleChange('all')}>{'Add'}</Button>
          <Button type="primary" onClick={() => handleChange('create')}>{'Edit'}</Button>
          <Button type="primary" danger onClick={() => handleChange('active')}>{'Delete'}</Button>
          <Button type="primary" ghost onClick={() => handleChange('finished')}>{'Cancel'}</Button>
          <Button type="primary" onClick={() => handleChange('finished')}>{'Submit'}</Button>
        </Space>
      </Form.Item>
      <Row>
        <Col span={11}>
          <Form.Item label="Tên dự án" name="projectName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="Số lượng NTN" name="numberOfVolunteer">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item label="Mã dự án" name="projectCode">
            <Input/>
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Form.Item label="Ngày bất đầu" name="startDate">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Ngày hoàn thành" name="endDate">
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Thông tin chung" name="generalInformation">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item label="Video" name="videoFile">
            <Input addonAfter={<YoutubeOutlined />}/>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="File đính kèm" name="attachmentFile">
            <Input addonAfter={<SnippetsOutlined />}/>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">Thông tin dược chất</Divider>
      <Row>
        <Col span={11}>
          <Form.Item label="Dược chất" name="drugSubstance">
            <Input/>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="Hàm lượng" name="quality">
            <Input addonAfter={select}/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item label="Dược lý" name="pharmacological">
            <Input/>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="Chỉ định" name="point">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item label="Liều lượng" name="amount">
            <Input/>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="Cách dùng" name="howToUse">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">Tiền bồi thường</Divider>
      <Row>
        <Col span={11}>
          <Form.Item label="Giai đoạn 1" name="period1">
            <Input addonAfter="VND"/>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          <Form.Item label="Giai đoạn 2" name="period2">
            <Input addonAfter="VND"/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Dặn dò trong thí nghiệm thuốc" name="note">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Well>);
};


