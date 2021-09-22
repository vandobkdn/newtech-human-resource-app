import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { NewProjectInformation } from './information';
import { NewProjectSchedule } from './schedule';
import { NewProjectSelectionStandard } from './selection-standard';

const { TabPane } = Tabs;

export const NewProject = () => {
  return (<Tabs onChange={() => ({})} type="card">
    <TabPane tab="Information" key="1">
      <NewProjectInformation />
    </TabPane>
    <TabPane tab="Schedule" key="2">
      <NewProjectSchedule />
    </TabPane>
    <TabPane tab="Selection Standard" key="3">
      <NewProjectSelectionStandard />
    </TabPane>
    <TabPane tab="Information Questionnaire" key="4">
      To be implemented
    </TabPane>
    <TabPane tab="ICF" key="5">
      To be implemented
    </TabPane>
    <TabPane tab="Notification" key="5">
      To be implemented
    </TabPane>
  </Tabs>);
};


