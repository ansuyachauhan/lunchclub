import React from 'react';
import HomeCarousel from './CarouselComponent'
import About from './AboutComponent'
import Memebershiphome from './MemberShipHomeComponent'
import ContactUsHome from './ContactUsHomeComponent'


function Home(props) {
    return (
        <div>
            <HomeCarousel/>
            <About/>
            <Memebershiphome/>
            <ContactUsHome/>
        </div>
    );
        
}

export default Home;   