// layouts
import { HeaderOnly } from '~/layout';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
