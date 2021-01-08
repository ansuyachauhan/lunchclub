import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeCarousel from './CarouselComponent'
import About from './AboutComponent'
import Memebershiphome from './MemberShipHomeComponent'
import ContactUsHome from './ContactUsHomeComponent'


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeCarousel/>
                <About/>
                <Memebershiphome/>
                <ContactUsHome/>

              
                <Footer/>
            </div>
        );
    }
}
export default Main;