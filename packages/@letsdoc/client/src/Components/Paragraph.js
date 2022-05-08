import * as React from 'react'

const defaults = {
    position: 'absolute',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '38px',
    lineHeight: '50px',
    color: '#3AB1FB',
}


export function Paragraph(props) {
    return (
        <div>
            <p style={{...defaults, ...props.style}}>
                {props.text || 'Paragraph\'s text'}
            </p>
        </div>
    )
}
