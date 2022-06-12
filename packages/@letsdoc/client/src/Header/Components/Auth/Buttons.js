import * as React from 'react'
import { BootstrapSignUp, BootstrapLogIn, BootstrapStack } from './style'
import { NavLink } from 'react-router-dom'
import { getUserData } from '../../../Components/Func'

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
            {   getUserData() && (
                    <NavLink to='/profile' style={{textDecoration: 'none'}}>
                        <BootstrapLogIn variant='text'>
                        PROFILE
                        </BootstrapLogIn>
                    </NavLink>
                ) || (
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
