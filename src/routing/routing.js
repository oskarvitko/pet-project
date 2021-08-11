import LoginPage from '../pages/LoginPage/LoginPage'
import IndexPage from '../pages/IndexPage/IndexPage'

import { INDEX_ROUTE, LOGIN_ROUTE } from './contants'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: LoginPage,
    },
]

export const privateRoutes = [
    {
        path: INDEX_ROUTE,
        component: IndexPage,
    },
]
