import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../routing/contants'
import { setUser } from '../../store/actions/appActions'
import './Navbar.scss'

const componentClass = 'navbar'
const classes = {
    btnLogin: componentClass + '__btn-login'
}

const Navbar = () => {
    const { user } = useSelector(store => store.app)
    const dispatch = useDispatch()

    const exit = () => {
        dispatch(setUser(false))
    }

    return (
        <AppBar className={componentClass}>
            <Toolbar>
                <Typography variant="h6">
                    Kanban
                </Typography>
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <Button onClick={exit} className={classes.btnLogin} color={'primary'} variant={'contained'}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button className={classes.btnLogin} color={'primary'} variant={'contained'}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar