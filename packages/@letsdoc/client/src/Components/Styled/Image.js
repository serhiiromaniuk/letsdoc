// import { Button } from '@mui/material'
import * as React from 'react'

export function Image(props) {
    return (
        <div style={{    
            backgroundImage: `url(${props.url})`,
            position: 'absolute',
            width: '540px',
            height: '540px',
            ...props.style
        }}>
        </div>
    )
}

// export function SearchIcon(props) {
//     return (
//         <div style={{
//             margin: '10px',
//             ...props.style
//         }}>
//             <Button style={{
//                 borderRadius: '5px',
//                 color: 'white',
//                 minWidth: '50px',
//                 padding: '0px'
//             }}>
//                 <img src='/images/search_button.svg' width='50px' position='center' alt='search-icon'/>
//             </Button>
//         </div>
//     )
// }
