import * as React from 'react'
import { BootstrapSignUp, BootstrapLogIn, BootstrapStack } from './style'
import { NavLink } from 'react-router-dom'
import { getUserData, makeLogout } from '../../../Components/Func'

function getAndRedirect() {
    const path = window.location.pathname
    if (path === '/profile') return (
        <NavLink to='/logout' style={{textDecoration: 'none'}}>
            <BootstrapLogIn variant='text'>
            LOG OUT
            </BootstrapLogIn>
        </NavLink>
    )
    return (
        <NavLink to='/profile' style={{textDecoration: 'none'}}>
            <BootstrapLogIn variant='text'>
            PROFILE
            </BootstrapLogIn>
        </NavLink>
    )

}

function SignUpButton() {
    return (
        <div>
            {   getUserData() && (
                    <NavLink to='/document' style={{textDecoration: 'none'}}>
                        <BootstrapSignUp variant='text'>
                        MY DOCUMENT
                        </BootstrapSignUp>
                    </NavLink>
                ) || (
                    <NavLink to='/register' style={{textDecoration: 'none'}}>
                        <BootstrapSignUp variant='text'>
                        SIGN UP
                        </BootstrapSignUp>
                    </NavLink>
                )
            }
        </div>
    )
}

function LogInButton() {
    return (
        <div>
            {   getUserData() && getAndRedirect() || (
                    <NavLink to='/login' style={{textDecoration: 'none'}}>
                        <BootstrapLogIn variant='text'>
                        LOG IN
                        </BootstrapLogIn>
                    </NavLink>
                )
            }
        </div>
    )
}

export function AuthButtons() {
  return (
        <BootstrapStack direction='row' spacing={2}>
            <SignUpButton/>
            <LogInButton/>
        </BootstrapStack>
  )
}
