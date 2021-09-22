import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Modal, Select, Space, Table } from 'antd';
import { Well } from '../../../components/common/Well';
import { dataVolunteer } from '../../../components/mocks';
import { EyeOutlined } from '@ant-design/icons';
import RegisterAccount from '../../../pages/dashboard';

export const VolunteerManagementForm = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [active, setActive] = useState('all');
  const [data, setData] = useState(dataVolunteer['data']);
  const columns = {
    all: [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Phone',
        dataIndex: 'phone'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        render: text => <a><bold>{text}</bold></a>,
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth'
      },
      {
        title: 'Date Joined',
        dataIndex: 'dateJoin'
      },
      {
        title: 'ID Code',
        dataIndex: 'codeId'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: text => <div style={{ color: text === 'Online' ? '#2FC346' : '#FFCC00' }}>{text}</div>,
      },
      {
        title: 'Profession',
        dataIndex: 'profession'
      },
      {
        title: 'Project Code',
        dataIndex: 'projectCode',
        render: text => <a><bold>{text}</bold></a>,
      },
      {
        title: 'Reason',
        dataIndex: 'reason',
      },
      {
        title: 'Information',
        dataIndex: 'info',
        render: () => (<Button onClick={() => setShowInfo(true)}><EyeOutlined /></Button>)
      }
    ],
    joining: [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Phone',
        dataIndex: 'phone'
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth'
      },
      {
        title: 'Date Joined',
        dataIndex: 'dateJoin'
      },
      {
        title: 'ID Code',
        dataIndex: 'codeId'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: text => <div style={{ color: text === 'Online' ? '#2FC346' : '#FFCC00' }}>{text}</div>,
      },
      {
        title: 'Profession',
        dataIndex: 'profession'
      },
      {
        title: 'Project Code',
        dataIndex: 'projectCode',
        render: text => <a><bold>{text}</bold></a>,
      }
    ],
    blackList: [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Phone',
        dataIndex: 'phone'
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth'
      },
      {
        title: 'Date Joined',
        dataIndex: 'dateJoin'
      },
      {
        title: 'ID Code',
        dataIndex: 'codeId'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: text => <div style={{ color: text === 'Online' ? '#2FC346' : '#FFCC00' }}>{text}</div>,
      },
      {
        title: 'Profession',
        dataIndex: 'profession'
      },
      {
        title: 'Reason',
        dataIndex: 'reason',
      }
    ],
  }
  const handleChange = (event) => {
    setData(dataVolunteer[event?.value]);
  };
  return (<Well>
    <Modal width={'80%'} title="Personal Information" visible={showInfo} footer={null} onCancel={() => setShowInfo(false)}>
      <RegisterAccount />
    </Modal>
    <Form.Item>
      <Space>
        <Button type="primary" onClick={() => setActive('all')} disabled={active === 'all'}>{'All'}</Button>
        <Button type="primary" onClick={() => setActive('joining')} disabled={active === 'joining'}>{'Joining'}</Button>
        <Button type="primary" onClick={() => setActive('blackList')} disabled={active === 'blackList'}>{'Blacklist'}</Button>
      </Space>
    </Form.Item>
    <Form.Item label="Joining list" name="joiningList">
      <Select labelInValue defaultValue={{ value: 'All' }} style={{ width: 120 }} onChange={handleChange}>
        <Select.Option value="all">{'All'}</Select.Option>
        <Select.Option value="joining">{'Joining'}</Select.Option>
        <Select.Option value="backList">{'Back list'}</Select.Option>
      </Select>
    </Form.Item>
    <Table columns={columns[active]} dataSource={data}/>
  </Well>);
};


