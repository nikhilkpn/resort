import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

class Services extends React.Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Free cocktails',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda natus modi, tempora molestias similique nobis nesciunt esse! Architecto totam qui repellendus culpa quasi, aperiam earum. Autem, quae! Deserunt, animi?'
            },
            {
                icon: <FaHiking/>,
                title: 'Free hiking',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda natus modi, tempora molestias similique nobis nesciunt esse! Architecto totam qui repellendus culpa quasi, aperiam earum. Autem, quae! Deserunt, animi?'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda natus modi, tempora molestias similique nobis nesciunt esse! Architecto totam qui repellendus culpa quasi, aperiam earum. Autem, quae! Deserunt, animi?'
            },
            {
                icon: <FaBeer/>,
                title: 'Free beer',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda natus modi, tempora molestias similique nobis nesciunt esse! Architecto totam qui repellendus culpa quasi, aperiam earum. Autem, quae! Deserunt, animi?'
            },
        ]
    }
    render(){
        return (
            <section className='services'>
                <Title title='Services'/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
    )
}
}

export default Services
