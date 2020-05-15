import React from 'react'
import { RoomConsumer } from '../context'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

const RoomContainer = () => { 
    return (
        <RoomConsumer>
            { value=> {
                
                    const {loading,sortedRooms, rooms} = value;
                    
                    if (loading){
                        return <Loading/>
                    }
                    return (
                        <div>
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </div>
                    )

                }
            }
        </RoomConsumer>
    )
}

export default RoomContainer
