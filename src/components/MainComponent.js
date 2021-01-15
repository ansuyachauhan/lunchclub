import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Gallery from './GalleryComponent';
import Events from './EventsComponents';
import About from './AboutComponent';
import MembershipHome from './MemberShipHomeComponent';
import ContactUsHome from './ContactUsHomeComponent';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        gallery: state.gallery,
       
    };
};

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/events' render={() => <Events campsites={this.props.campsites} />} />
                    <Route exact path='/gallery' render={() => <Gallery gallery={this.props.gallery} />} />
                    <Route exact path='/membership' render={() => <MembershipHome campsites={this.props.campsites} />} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={ContactUsHome} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));