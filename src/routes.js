import React from 'react';

const Home = React.lazy(() => import('./components/home/Home'));
const Usuario = React.lazy(() => import('./components/usuario/Usuario'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/usuario', exact: true, name: 'Usuário', component:  Usuario }
];

export default routes;
