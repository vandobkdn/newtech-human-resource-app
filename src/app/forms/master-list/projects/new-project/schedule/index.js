import React from 'react';
import 'antd/dist/antd.css';
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, Space, Table } from 'antd';
import { Well } from '../../../../../components/common/Well';
import { ClockCircleOutlined } from '@ant-design/icons';

export const NewProjectSchedule = () => {
  const handleChange = (value) => ({

  });

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
      <Divider orientation="left">Kế hoạch lịch trình dự án</Divider>
      <Row>
        <Col span={3}>
          <Form.Item label="Step" name="step">
            <Input />
          </Form.Item>
        </Col>
        <Col span={4} offset={1}>
          <Form.Item label="Date 1" name="date1">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Time 1" name="time1">
            <Input addonAfter={<ClockCircleOutlined />}/>
          </Form.Item>
        </Col>
        <Col span={3} offset={1}>
          <Form.Item label="Time 2" name="time2">
            <Input addonAfter={<ClockCircleOutlined />}/>
          </Form.Item>
        </Col>
        <Col span={3} offset={1}>
          <Form.Item label="Task" name="task">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item>
          <Space>
            <Button type="primary" onClick={() => handleChange('all')}>{'Add'}</Button>
            <Button type="primary" danger onClick={() => handleChange('active')}>{'Delete'}</Button>
            <Button type="primary" ghost onClick={() => handleChange('finished')}>{'Cancel'}</Button>
          </Space>
        </Form.Item>
      </Row>
      <Table columns={columns} dataSource={data}/>
    </Form>
  </Well>);
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Step',
    dataIndex: 'step'
  },
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: 'Time 1',
    dataIndex: 'time1'
  },
  {
    title: 'Time 2',
    dataIndex: 'time2'
  },
  {
    title: 'Task',
    dataIndex: 'task'
  },
];

const data = [
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
  {
    name: 'TDSH-21-035',
    step: '01',
    date: 'March 6, 2021',
    time1: '7.30 AM',
    time2: '15.30 PM',
    task: 'Check in',
  },
]


