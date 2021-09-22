import React from 'react';
import 'antd/dist/antd.css';
import {Modal} from "antd";

export const infoModal = (title, okText, content) => {
  Modal.info({
    title: title || 'Note',
    content: content || (
      <div>
        <p>Thanks for your registered!</p>
        <p>Administrator will check your profile and send feedback via email or via your account!</p>
      </div>
    ),
    onOk() {},
    okText: okText || 'Submit',
  });
}
