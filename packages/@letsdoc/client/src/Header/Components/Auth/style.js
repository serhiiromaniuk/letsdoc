import { styled } from '@material-ui/core/styles'
import { Stack } from '@mui/material'
import { Button} from '@material-ui/core'

export const BootstrapStack = styled(Stack)({
    position: 'absolute',
    width: '459px',
    height: '44px',
    right: '11%',
    top: '23px'
})

const defaults = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '26px',
    lineHeight: '40px',
    borderRadius: '5px',
    boxShadow: 'none'
}
export const BootstrapSignUp = styled(Button)({
    ...defaults,
    backgroundColor: '#FF8282',
    width: '250px',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#2C2C2C',
        borderColor: '#FFFFFF'
    }
})

export const BootstrapLogIn = styled(Button)({
    ...defaults,
    minWidth: '150px',
    color: '#FFB3B3',
    '&:hover': {
        backgroundColor: '#2C2C2C',
        color: '#FFFFFF',
        borderRadius: '5px'
    }
})

export const BootstrapCustom = styled(Button)({
    ...defaults,
    minWidth: '160px',
    color: '#FFB3B3',
    '&:hover': {
        backgroundColor: '#2C2C2C',
        color: '#FFFFFF',
        borderRadius: '5px'
    }
})
