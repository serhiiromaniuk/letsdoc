import { red } from '@mui/material/colors';
import './style.css';

const orange = '#000000';
const textDark = '#0D0D0D';
const borderLight = 'rgba(206, 212, 218, .993)';

export const RegisterStyles = theme => ({
  main: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    display: 'block',
    width: 'auto',
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  paper: {
    position: 'relative',
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1.5px solid #ffffff',
    background: 'linear-gradient(180deg, rgba(145, 250, 255, 0.7) 100%, rgba(255,255,255,0.3) 0%)',
    boxShadow: '.2px 12px 18px rgba(131,153,167,0.6)',

    '&:hover': {
      boxShadow: '0px 10px 15px rgba(131,153,167,0.99)'
    }
  },

  avatar: {
    marginTop: 20,
    position: 'relative',
    background: 'rgba(255,255,255, 0.6)',
    width: '100px',
    height: '100px',
    boxShadow: '0px 0px 12px rgba(131,153,167,0.99)',
  },

  icon: {
    width: '80px',
    height: '80px',
    color: 'rgba(131,153,167,0.79)'
  },

  form: {
    margin: theme.spacing(4)
  },

  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: '14px',
    lineHeight: '5px',
    fontFamily: 'Nunito',
    fontWeight: 800,
    opacity: 0.45,
    color: `${textDark} !important`
  },

  inputs: {
    position: 'relative',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: 'Nunito',
    color: textDark,
    fontSize: '14px',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: '10px',
    border: '1.4px solid',
    boxShadow: '1px 2px 20px rgba(169, 168, 187, 0.29457423) ',
    borderColor: borderLight,

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.7) '
    }
  },
  register_button: {
    color: textDark,
    background: 'rgba(255, 255, 255,.45)',
    position: 'relative',
    fontWeight: 400,
    fontFamily: 'Nunito',
    overflow: 'hidden',
    marginTop: theme.spacing(3),
    padding: `${theme.spacing(1.6)}px`,
    border: 'none',
    borderRadius: '8px',
    letterSpacing: '3px',

    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      boxSizing: 'border-box',
      borderRadius: '8px',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1
    },
    '&::before': {
      borderBottom: '2px solid rgba(255,255,255,.58)',
      borderTop: '2px solid rgba(255,255,255,.58)',
      transform: 'scale(0,1)'
    },
    '&::after': {
      borderLeft: '3px solid rgba(255,255,255,.58)',
      borderRight: '3px solid rgba(255,255,255,.58)',
      transform: 'scale(1,0)'
    },
    '&:hover::before': {
      transform: 'scale(1,1)',
      transition: 'transform cubic-bezier(0.85,.36,.8,.42) 0.3s'
    },
    '&:hover::after': {
      transform: 'scale(1,1)',
      transition: 'transform cubic-bezier(0.85,.36,.8,.42) .2s'
    },
    '&::first-letter': {
      color: orange
    },
    '&:hover': {
      background: 'linear-gradient(45deg, #80E2CD 10%, #72D6C0 100%)',
      color: textDark,
      fontWeight: 800
    }
  },
  text: {
    fontWeight: 500,
    fontSize: '24px',
    fontFamily: 'Nunito',
    textAlign: 'center',
  },

  button: {
    color: textDark,
    background: 'rgba(255,255,255,.45)',
    position: 'relative',
    fontWeight: 400,
    fontFamily: 'Nunito',
    overflow: 'hidden',
    marginTop: theme.spacing(3),
    padding: `${theme.spacing(1.6)}px`,
    border: 'none',
    borderRadius: '8px',
    letterSpacing: '3px',

    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      boxSizing: 'border-box',
      borderRadius: '8px',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1
    },
    '&::before': {
      borderBottom: '2px solid rgba(255,255,255,.58)',
      borderTop: '2px solid rgba(255,255,255,.58)',
      transform: 'scale(0,1)'
    },
    '&::after': {
      borderLeft: '3px solid rgba(255,255,255,.58)',
      borderRight: '3px solid rgba(255,255,255,.58)',
      transform: 'scale(1,0)'
    },
    '&:hover::before': {
      transform: 'scale(1,1)',
      transition: 'transform cubic-bezier(0.85,.36,.8,.42) 0.3s'
    },
    '&:hover::after': {
      transform: 'scale(1,1)',
      transition: 'transform cubic-bezier(0.85,.36,.8,.42) .2s'
    },
    '&:hover': {
      background: 'linear-gradient(45deg, #80E2CD 10%, #72D6C0 100%)',
      color: textDark,
      fontWeight: 800
    }
  },
  
  error: {
    border: `2px solid ${red[900]}`,
    background: 'rgba(60, 236, 205, 0.7)',
    color: red[900],
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'Raleway, sans-serif',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(3)
  },

  passwordEye: {
    color: 'rgba(61, 61, 61, 0.5)',
    opacity: 0.7
  }
});
