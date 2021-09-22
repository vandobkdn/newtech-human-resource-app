import i18next from 'i18next';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import React from 'react';

const { SubMenu } = Menu;

export const Menus = () => {
  const handleRouting = {
    accountInfo: () => {
      return <Redirect to="/login" />;
    },
    registerAccount: () => ({

    }),
    projectBE: () => ({

    }),
    masterList: () => ({

    }),
  };
  const handleClick = ({ key }) => {
    handleRouting[key]();
  };

  return (
    <Menu onClick={handleClick} mode="vertical">
      <SubMenu icon={<AppstoreOutlined />}>
        <Menu.ItemGroup title={i18next.t('menu.labels.accounts.account')}>
          <Menu.Item key="accountInfo">{i18next.t('menu.labels.accounts.subs.accountInfo')}</Menu.Item>
          <Menu.Item key="registerAccount">{i18next.t('menu.labels.accounts.subs.registerAccount')}</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item key="projectBE">{i18next.t('menu.labels.projectBE')}</Menu.Item>
        <Menu.Item key="masterList">{i18next.t('menu.labels.masterList')}</Menu.Item>

      </SubMenu>
      <SubMenu key="sub1" icon={<MailOutlined />}>
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
