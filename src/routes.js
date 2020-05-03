import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));
const Usuario = React.lazy(() => import('./app/components/usuario/Usuario'));
const Cadastro = React.lazy(() => import('./app/components/cadastro/Cadastro'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/usuario', exact: true, name: 'Usuário', component:  Usuario },
  { path: '/Cadastro', exact: true, name: 'Cadastro', component:  Cadastro }
];

export default routes;
