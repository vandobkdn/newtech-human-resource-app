import React, { useState } from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import { Button, Form, Select, Space, Table } from 'antd';
import { Well } from '../../../components/common/Well';
import { dataProjectBE } from '../../../components/mocks';

export const ProjectBEForm = () => {
  const prefix = 'forms.dashboard.projectBE.labels.';
  const [data, setData] = useState(dataProjectBE['TDSH2021']);
  const handleChange = (event) => {
    setData(dataProjectBE[event?.value]);
  };

  const columns = [
    {
      title: i18next.t(prefix + 'columns.name'),
      dataIndex: 'name'
    },
    {
      title: i18next.t(prefix + 'columns.code'),
      dataIndex: 'code'
    },
    {
      title: i18next.t(prefix + 'columns.beginDate'),
      dataIndex: 'beginDate'
    },
    {
      title: i18next.t(prefix + 'columns.closeDate'),
      dataIndex: 'closeDate'
    },
    {
      title: i18next.t(prefix + 'columns.status'),
      dataIndex: 'status'
    },
    {
      title: i18next.t(prefix + 'columns.numberOfE'),
      dataIndex: 'numberOfE'
    },
    {
      title: i18next.t(prefix + 'columns.numberOfRegister'),
      dataIndex: 'numberOfRegister'
    }
  ];

  return (<Well header={i18next.t(prefix + 'headers.projectList')}>
    <Form.Item>
      <Space>
        <Select labelInValue defaultValue={{ value: 'TDSH2021' }} style={{ width: 120 }} onChange={handleChange}>
          <Select.Option value="TDSH2021">{'TDSH - 2021'}</Select.Option>
          <Select.Option value="TDSH2022">{'TDSH - 2022'}</Select.Option>
        </Select>
        <Button type="primary">{i18next.t(prefix + 'buttons.newProject')}</Button>
        <Button type="primary">{i18next.t(prefix + 'buttons.joinedProject')}</Button>
      </Space>
    </Form.Item>
    <Table columns={columns} dataSource={data}/>
  </Well>);
};

