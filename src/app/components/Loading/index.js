import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto content-center' ><Spin size='large' /> </div>
    </div>
  )
}

export default Loading;
