import React, { Suspense } from 'react';
import Routes from './routes';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Switch as RouteSwitch, Redirect } from 'react-router-dom';
import { Container } from './pages/container';
import './../i18n';

export function App() {
  return (
    <Router basename="/newtech-human-resource-app">
      <RouteSwitch>
       {/*<Route path="/" exact render={() => <Redirect to="/register-account" />} />*/}
        {Routes.map(({ path, Component, exact, breadcrumb }) => (
          <Route
            path={path}
            key={path}
            exact={exact}
            render={() => (
              <Suspense fallback={<Loading />}>
                <Container breadcrumb={breadcrumb}>
                  <Component />
                </Container>
              </Suspense>
            )}
          />
        ))}
      </RouteSwitch>
    </Router>
  );
}
export default App;
