import * as React from 'react'
import { BootstrapSignUp, BootstrapLogIn, BootstrapStack, BootstrapCustom } from './style'
import { NavLink } from 'react-router-dom'
import { getUserData, makeLogout } from '../../../Components/Func'

function getLoginHostAndRedirect() {
    const path = window.location.pathname
    if (path === '/profile') return (
        <NavLink to='/logout' style={{textDecoration: 'none'}}>
            <BootstrapLogIn variant='text' onClick={(e) => makeLogout(e)}>
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

function getDocumentHostAndRedirect(run) {
    const path = window.location.pathname
    if (path === '/document') return (
        <BootstrapCustom variant='text' onClick={(e) => run(e)}>
        PUBLISH
        </BootstrapCustom>
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
            {   getUserData() && getLoginHostAndRedirect() || (
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

function CustomButton(props) {
    return (
        <div>
            {   getUserData() && getDocumentHostAndRedirect(props.run) || (
                    <NavLink to='/sandbox' style={{textDecoration: 'none'}}>
                        <BootstrapCustom variant='text'>
                        SANDBOX
                        </BootstrapCustom>
                    </NavLink>
                )
            }
        </div>
    )
}

export function AuthButtons(props) {
    return (
            <BootstrapStack direction='row' spacing={2}>
                <CustomButton run={props.run}/>
                <SignUpButton/>
                <LogInButton/>
            </BootstrapStack>
    )
}
