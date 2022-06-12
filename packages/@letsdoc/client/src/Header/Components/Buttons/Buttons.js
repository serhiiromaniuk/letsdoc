import * as React from 'react'
import { BootstrapButton, BootstrapStack } from './style'

function StyledButton({name}) {
    return (
        <div>
            <BootstrapButton variant='text'>
            {name}
            </BootstrapButton>
        </div>
    )
}

export function Buttons() {
  return (
        <BootstrapStack direction='row' spacing={6}>
            <StyledButton name='SEARCH'/>
            <StyledButton name='MAP'/>
            <StyledButton name='INFO'/>
        </BootstrapStack>
  )
}
