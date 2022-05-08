import { LogoHeader } from './Logo'
import { Buttons } from './Buttons'
import { AuthButtons } from './Auth'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import AppBar from '@mui/material/AppBar'

function ElevationScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
}
  
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

const styling = {
    backgroundColor: 'white',
    width: 'auto',
    height: '100px',
}

export default function Header(props) {
    return (
        <div>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar style={styling}>
                        <LogoHeader/>
                        <Buttons/>
                        <AuthButtons/>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    )
}