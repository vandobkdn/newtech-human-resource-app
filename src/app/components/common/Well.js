import React from 'react';
import 'antd/dist/antd.css';
import '../../index.scss'

export const Well = ({header = '', children}) => {
  return (<div className={'components'}>
    <div className={'well'}>
      {header && <div className={'well-header'}>{header}</div>}
      {children}
    </div>
  </div>);
};
