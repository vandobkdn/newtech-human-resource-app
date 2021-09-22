import React from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { HabitForm } from '../../forms/dashboard/habit';
import { ProjectBEForm } from '../../forms/dashboard/project-be';
import { RegisterAccountForm } from '../../forms/dashboard/register-account';

const { TabPane } = Tabs;

const RegisterAccount = () => {
  return (<Tabs onChange={() => ({})} type="card">
    <TabPane tab={i18next.t('pages.dashboard.tabs.information')} key="1">
      <RegisterAccountForm />
    </TabPane>
    <TabPane tab={i18next.t('pages.dashboard.tabs.habit')} key="2">
      <HabitForm />
    </TabPane>
    <TabPane tab={i18next.t('pages.dashboard.tabs.projectBE')} key="3">
      <ProjectBEForm />
    </TabPane>
    <TabPane tab={i18next.t('pages.dashboard.tabs.notification')} key="4">
      To be implemented
    </TabPane>
  </Tabs>);
};

export default RegisterAccount;


