import { Button } from '@mui/material'
import * as React from 'react'

export function MainPageIllustration(props) {
    return (
        <div style={{    
            backgroundImage: 'url(/images/illustration.svg)',
            position: 'absolute',
            width: '1045px',
            height: '394px',
            ...props.style
        }}>
        </div>
    )
}

export function SearchIcon(props) {
    return (
        <div style={{
            margin: '10px',
            ...props.style
        }}>
            <Button style={{
                borderRadius: '5px',
                color: 'white',
                minWidth: '50px',
                padding: '0px'
            }} onClick={props.onClick}>
                <img src='/images/search_button.svg' width='50px' position='center' alt='search-icon'/>
            </Button>
        </div>
    )
}

export function StarIcon(props) {
    const style = {
        width: '28px',
        height: '28px',
        color: 'black',
        ...props.style
    }

    return (
        <div>
            {/* <Button style={style}> */}
                <img src='/images/star_small_dark.svg' style={style} position='center' alt='search-icon'/>
            {/* </Button> */}
        </div>
    )
}
