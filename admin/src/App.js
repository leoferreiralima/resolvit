import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';

import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

import Dashboard from './pages/Dashboard'

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard} >
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
