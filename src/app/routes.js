import { lazy } from 'react';

const Routes = [
  {
    name: 'Register Account',
    path: '/register-account',
    Component: lazy(() => import('./pages/dashboard')),
    exact: true,
    breadcrumb: {
      name: 'routes.breadcrumbs.registerAccount',
      href: '#',
    },
  },
  {
    name: 'Project BE',
    path: '/project-be',
    Component: lazy(() => import('./pages/projectbe')),
    exact: true,
    breadcrumb: {
      name: 'routes.breadcrumbs.projectBE',
      href: '#',
    },
  },
  {
    name: 'Master List',
    path: '/master-list',
    Component: lazy(() => import('./pages/masterlist')),
    exact: true,
    breadcrumb: {
      name: 'routes.breadcrumbs.masterList',
      href: '#',
    }
  },
];

export default Routes;
