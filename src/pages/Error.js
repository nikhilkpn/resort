import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../compontents/Background'
import Banner from '../compontents/Banner'

const Error = () => {
    return (
        <Background>
            <Banner title='404' subtitle='Page not found'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Background>
        )
}

export default Error
