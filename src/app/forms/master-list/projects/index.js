import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Well } from '../../../components/common/Well';
import { AllProjectForm } from './all-project';
import { NewProject } from './new-project';

const { TabPane } = Tabs;

export const ProjectManagementForm = () => {
  return (<Well>
      <Tabs onChange={() => ({})} type="card">
        <TabPane tab="All project" key="1">
          <AllProjectForm />
        </TabPane>
        <TabPane tab="Create new project" key="2">
          <NewProject />
        </TabPane>
        <TabPane tab="Active project" key="3">
          To be implemented
        </TabPane>
        <TabPane tab="Finished project" key="5">
          To be implemented
        </TabPane>
      </Tabs>
  </Well>);
};


