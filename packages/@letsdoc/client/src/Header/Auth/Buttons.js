import * as React from 'react'
import { BootstrapSignUp, BootstrapLogIn, BootstrapStack } from './style'

function SignUpButton() {
    return (
        <div>
            <BootstrapSignUp variant='text'>
            SIGN UP
            </BootstrapSignUp>
        </div>
    )
}

function LogInButton() {
    return (
        <div>
            <BootstrapLogIn variant='text'>
            LOG IN
            </BootstrapLogIn>
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
