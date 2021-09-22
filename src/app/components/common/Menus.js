import i18next from 'i18next';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React from 'react';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

export const Menus = () => {
  return (
    <Menu onClick={() => ({})} mode="vertical">
      <SubMenu icon={<AppstoreOutlined />}>
        <Menu.ItemGroup title={i18next.t('menu.labels.accounts.account')}>
          <Menu.Item key="accountInfo">
            <Link to="/register-account">
              {i18next.t('menu.labels.accounts.subs.accountInfo')}
            </Link>
          </Menu.Item>
          <Menu.Item key="registerAccount">
            <Link to="/register-account">
              {i18next.t('menu.labels.accounts.subs.registerAccount')}
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item key="projectBE">
          <Link to="/project-be">
            {i18next.t('menu.labels.projectBE')}
          </Link>
        </Menu.Item>
        <Menu.Item key="masterList">
          <Link to="/master-list">
            {i18next.t('menu.labels.masterList')}
          </Link>
        </Menu.Item>
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
