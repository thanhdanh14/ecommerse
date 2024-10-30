import { lazy } from 'react';

const routers = [
    {
        path: '/',
        componet: lazy(() => import('@components/Home/Home'))
    }
];

export default routers;
