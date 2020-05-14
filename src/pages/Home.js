import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../compontents/Background'
import Banner from '../compontents/Banner'

const Home = () => {
    return (
        <Background>
            <Banner title='Luxurious rooms' subtitle='Deluxe rooms starting at Rs.800'>
                <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
            </Banner>
        </Background>
    )
}

export default Home
