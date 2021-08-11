import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/actions/appActions'
import './LoginPage.scss'

const componentClass = 'login-page'
const classes = {
    container: componentClass + '__container',
    btnEnter: componentClass + '__btn-enter'
}

const LoginPage = () => {
    const dispatch = useDispatch()

    const enter = () => {
        dispatch(setUser(true))
    }

    return (
        <div className={componentClass}>
            <div className={classes.container}>
                <Button onClick={enter} variant={'contained'} className={classes.btnEnter}>Войти</Button>
            </div>
        </div>
    )
}

export default LoginPage
