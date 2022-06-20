import React from 'react'

const styling = {
    position: 'absolute',
    top: '400%',
    width: '99%',
    heigth: '300px',
    flexShrink: 0,
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '38px',
    lineHeight: '50px',
    color: '#3AB1FB',
}

export function Footer(props) {
    return (
        <div>
            <footer style={{...styling, color: 'blue'}}>
                <p style={{
                    ...styling,
                }}>Some footer nonsense!
                    <br/>
                    <br/>
                </p>
            </footer>
        </div>
    )
}