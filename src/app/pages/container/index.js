import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import 'antd/dist/antd.css';
import '../../index.scss'
import { Header } from '../../components/common/Header';
import { Breadcrumbs } from '../../components/common/Breadcrumb';
import { LeftHeaders, RightHeaders } from '../../components/configuration';
import { Menus } from '../../components/common/Menus';

export const Container = ({ breadcrumb, children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      name: 'HRM',
      href: '/index',
    },
  ]);

  useEffect(() => {
    const currentBreadcrumb = {...breadcrumb, name: i18next.t(breadcrumb.name)}
    setBreadcrumbs([...breadcrumbs, currentBreadcrumb]);
  }, [breadcrumb]);

  return (<div className={'container-page'}>
      <div className={'header'}>
        <Header headers={LeftHeaders}/>
        <Header headers={RightHeaders}/>
      </div>
      <div className={'breadcrumb'}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </div>
      <div className={'menu-divide-layout'}>
        <div className={'flex-item-background'}>
          <div className={'flex-item-left'}>
            <Menus />
          </div>
        </div>
        <div className={'flex-item-right'}>
          <div className={'content-page'}>{children}</div>
        </div>
      </div>
    </div>
  );
};
