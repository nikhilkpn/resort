import React from 'react'

const Background = ({children,background}) => {
    console.log(background);
    
    return (
        <header className={background}>
            {children}
        </header>
        )
}

Background.defaultProps = {
    background:'background'
}
export default Background
