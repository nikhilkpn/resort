import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../compontents/Background'
import Banner from '../compontents/Banner'
import Services from '../compontents/Services'
import FeaturedRooms from '../compontents/FeaturedRooms'

const Home = () => {
    return (
        <>
        <Background>
            <Banner title='Luxurious rooms' subtitle='Deluxe rooms starting at Rs.800'>
                <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
            </Banner>
        </Background>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
