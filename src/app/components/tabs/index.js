import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { RegisterAccountForm } from "../../forms/dashboard/register-account";
import { HabitForm } from '../../forms/dashboard/habit';
import { ProjectBEForm } from '../../forms/dashboard/project-be';

const { TabPane } = Tabs;

export const TabPanes = () => {
  return (
    <Tabs onChange={() => ({})} type="card">
      <TabPane tab="Information" key="1">
        <RegisterAccountForm />
      </TabPane>
      <TabPane tab="Habit" key="2">
        <HabitForm />
      </TabPane>
      <TabPane tab="Project BE" key="3">
        <ProjectBEForm />
      </TabPane>
      <TabPane tab="Notification" key="4">
        To be implemented
      </TabPane>
    </Tabs>
  );
};
