import React from 'react';
import 'antd/dist/antd.css';
import '../../index.scss'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export const Breadcrumbs = ({ breadcrumbs = [] }) => {
  return <Breadcrumb separator=">">{breadcrumbs.map((breadcrumb, index) => {
    if (index === 0) {
      return <Breadcrumb.Item href={breadcrumb.href}>
        <HomeOutlined />
        <span>{breadcrumb.name}</span>
      </Breadcrumb.Item>;
    } else if (index < breadcrumbs.length - 1) {
      return <Breadcrumb.Item href={breadcrumb.href}>
        <UserOutlined />
        <span>{breadcrumb.name}</span>
      </Breadcrumb.Item>;
    } else {
      return <Breadcrumb.Item>{breadcrumb.name}</Breadcrumb.Item>;
    }
  })}</Breadcrumb>;
}
