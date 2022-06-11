import * as React from 'react'
import { BootstrapSignUp, BootstrapLogIn, BootstrapStack } from './style'
import { NavLink } from 'react-router-dom'

function SignUpButton() {
    return (
        <div>
            <NavLink to='/register' style={{textDecoration: 'none'}}>
                <BootstrapSignUp variant='text'>
                SIGN UP
                </BootstrapSignUp>

            </NavLink>
        </div>
    )
}

function LogInButton() {
    return (
        <div>
            <NavLink to='/login' style={{textDecoration: 'none'}}>
                <BootstrapLogIn variant='text'>
                LOG IN
                </BootstrapLogIn>
            </NavLink>
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
