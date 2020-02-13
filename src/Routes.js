import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductsListPage from './Pages/ProductsListPage/ProductsListPage';
import ProductsActionPage from './Pages/ProductsActionPage/ProductsActionPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () =>< HomePage />
  },
  {
    path: '/products-list',
    exact: false,
    main: () =>< ProductsListPage />
  }, 
  {
    path: '/products/add',
    exact: false,
    main: ({history}) => <ProductsActionPage history={history} /> 
  },
  {
    path: '/products/:id/edit',
    exact: false,
    main: ({match}) => <ProductsActionPage match={match} />
  },
  {
    path: '',
    exact: false,
    main: () =>< NotFoundPage />
  }
];

export default routes;