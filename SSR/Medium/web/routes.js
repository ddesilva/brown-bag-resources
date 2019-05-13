import Home from './views/Home/Home';
import Product from './views/Product/Product';
import NotFound from './views/NotFound/NotFound';

const routes = [
  { path: '/home', component: Home, exact: true },
  { path: '/Product', component: Product, exact: true },
  { path: '*', component: NotFound, exact: true }
];

export default routes;
