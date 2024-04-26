// layouts
import { HeaderOnly } from '~/layout';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderOnly,
    },

    {
        path: '/cart',
        component: Cart,
        layout: null,
    },

    {
        path: '/login',
        component: Login,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
