import * as React from 'react'
import { SearchIcon } from '../../../Components'

const defaults = {
    position: 'absolute',
    fontFamily: 'Nunito',
    left: '124px',
    // width: '560px',
    height: '63px',
    fontStyle: 'normal',
    color: '#000000',
    // textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)'
}
const titleStyle = {
    ...defaults,
    left: '17.6%',
    right: '16.93%',
    top: '58%',

    fontWeight: 800,
    fontSize: '40px',
    lineHeight: '55px',
    textAlign: 'center',
    color: '#5E5E5E',

    // top: '193px',
}

const textStyle = {
    ...defaults,
    top: '310px',
    fontWeight: 800,
    fontSize: '50px',
    lineHeight: '68px',
    color: '#3AB1FB',

    left: '39%',
    right: '16.93%',
    top: '74%',
}

const iconDefaults = {
    position: 'absolute',
    left: '60%',
    top: '79.5%',
}

export default function Title() {
    return (
        <div>
            <p style={titleStyle}>
                With LETSDOC you could easily create, share and customise your own documents
            </p>

            <p style={textStyle}>
                Sign Up for free
            </p>
            <SearchIcon style={iconDefaults}/>
        </div>
    )
}
