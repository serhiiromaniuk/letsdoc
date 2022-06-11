import { styled } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import * as React from 'react'

export const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    })
)

export const TitleStyle = {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '20px',
    marginLeft: '20px',
    marginRight: '10px',
    width: '130px',
    color: '#000000',

    justifyContent: "flex-start"
}

export const ReviewStyle = {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '20px',
    width: '130px',
    marginRight: '20px',
    marginLeft: '10px',
    color: 'black',
    justifyContent: "flex-end"
}

export const PriceStyle = {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',

    lineHeight: '20px',
    marginRight: '25px',
    marginLeft: '23.5px',
    
    color: '#000000',
}

export const LocationStyle = {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '20px',
    marginRight: '20px',
    marginLeft: '20px',
    color: '#000000',
}

export const TagsBoxStyle = {
    height: 24,
    display: "flex",
    padding: 8,
    justifyContent: "space-around",
    alignItems: "center",
    width: '320px',
    marginRight: '20px',
    marginLeft: '20px',

    background: '#FF002E',
    borderRadius: '10px',
}

export const TagsTextStyle = {            
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '10px',
    color: '#FFFFFF',
    
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
}

export const ImgStyle = (imgUrl) => ({
        backgroundSize: '320px auto',
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        width: '320px',
        height: '250px',
        margin: 'auto',
        marginTop: '5%',
        color: 'white'
})

export const CardStyle = (style) => ({
    textAlign: 'center',
    background: '#FFFFFF',
    border: '5px solid #000000',
    boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    width: '380px',
    height: '478px', // 0,79375
    ...style
})

export const BoxStyle = {
    height: 24,
    padding: 8,
    display: "flex",
    alignItems: "center",
}
