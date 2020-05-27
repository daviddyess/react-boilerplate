import { lazy } from 'react';

export const imports = {
  Home: () => import(/* webpackChunkName: "home" */ 'pages/Home'),
  NotFound: () => import(/* webpackChunkName: "not-found" */ 'pages/NotFound')
};

export const Home = lazy(imports.Home);
export const NotFound = lazy(imports.NotFound);
