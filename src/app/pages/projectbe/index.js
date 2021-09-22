import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { InformationForm } from '../../forms/project-be-detail/information';

const { TabPane } = Tabs;

const ProjectBE = () => {
  return (<Tabs onChange={() => ({})} type="card">
    <TabPane tab="Information" key="1">
      <InformationForm />
    </TabPane>
    <TabPane tab="Schedule" key="2">
      {/*<Habit />*/}
    </TabPane>
    <TabPane tab="Project BE" key="3">
      {/*<ProjectBE />*/}
    </TabPane>
    <TabPane tab="Notification" key="4">
      To be implemented
    </TabPane>
  </Tabs>);
};

export default ProjectBE;


