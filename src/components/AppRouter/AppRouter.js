import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { INDEX_ROUTE, LOGIN_ROUTE } from '../../routing/contants'
import { privateRoutes, publicRoutes } from '../../routing/routing'

const AppRouter = () => {
    const { user } = useSelector(store => store.app)

    return user ? (
        <Switch>
            {privateRoutes.map(({ path, component }) =>
                <Route key={path} path={path} component={component} exact={true} />
            )}
            <Redirect to={INDEX_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, component }) =>
                <Route key={path} path={path} component={component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter
