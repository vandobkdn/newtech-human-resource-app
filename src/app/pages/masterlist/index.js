import React from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { VolunteerManagementForm } from '../../forms/master-list/volunteer';
import { ProjectManagementForm } from '../../forms/master-list/projects';

const { TabPane } = Tabs;

const MasterList = () => {

  return (<Tabs onChange={() => ({})} type="card">
    <TabPane tab="Volunteer Management" key="1">
      <VolunteerManagementForm i18n={i18next.t('forms.masterList')}/>
    </TabPane>
    <TabPane tab="Project Management" key="2">
      <ProjectManagementForm />
    </TabPane>
    <TabPane tab="Ask-Answer" key="3">
      To be implemented
    </TabPane>
    <TabPane tab="Report-Statistic" key="4">
      To be implemented
    </TabPane>
    <TabPane tab="Audit Trial" key="5">
      To be implemented
    </TabPane>
    <TabPane tab="Setting" key="6">
      To be implemented
    </TabPane>
  </Tabs>);
};

export default MasterList;


