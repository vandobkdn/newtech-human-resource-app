import React from 'react';
import 'antd/dist/antd.css';
import '../../index.scss'
import {Space} from 'antd';

export const Header = ({ headers = [] }) => {
  return <Space>
    {headers.map(header => (<a title={header.title} href={header.href}>
      <img height={header.height} width={header.width} src={require(`../../icons/${header.icon}.svg`)?.default} />
    </a>))}
  </Space>;
}
