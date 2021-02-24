import { lazy } from 'react';
import Cart from './Cart/Cart';
import Home from './Home/Home';

const Store = lazy(() => import('./Store/Store'))
const ProductList = lazy(() => import('./Store/components/ProductList'))

export { Cart, Home, Store, ProductList };
