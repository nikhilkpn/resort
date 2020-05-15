import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Background from '../compontents/Background'
import Banner from '../compontents/Banner'
import RoomContainer from '../compontents/RoomContainer'

export default class Rooms extends Component {
    render() {
        return (
            <>
            <Background background='roomsBackground'>
                <Banner title='Our Rooms'>
                    <Link to='/' className='btn-primary'>Return Home</Link>
                </Banner>
            </Background>
            <RoomContainer/>
            </>
        )
    }
}
