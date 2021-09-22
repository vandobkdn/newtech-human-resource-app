import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Select, Table } from 'antd';
import { Well } from '../../../../components/common/Well';
import { dataProjects } from '../../../../components/mocks';

const columns = [
  {
    title: 'Project name',
    dataIndex: 'name'
  },
  {
    title: 'Project code',
    dataIndex: 'code'
  },
  {
    title: 'Date of begin',
    dataIndex: 'dateBegin'
  },
  {
    title: 'Date of close',
    dataIndex: 'dateClose'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },
  {
    title: 'Number',
    dataIndex: 'number'
  },
  {
    title: 'Number of register person',
    dataIndex: 'numberOfRegisterPerson'
  }
];

export const AllProjectForm = () => {
  const [data, setData] = useState(dataProjects['all']);
  return (<Well>
    <Form.Item label="TDSH" name="year">
      <Select labelInValue defaultValue={{ value: '2021' }} style={{ width: 120 }}>
        <Select.Option value="2021">{'2021'}</Select.Option>
        <Select.Option value="2022">{'2022'}</Select.Option>
        <Select.Option value="2023">{'2023'}</Select.Option>
      </Select>
    </Form.Item>
    <Table columns={columns} dataSource={data}/>
  </Well>);
};


