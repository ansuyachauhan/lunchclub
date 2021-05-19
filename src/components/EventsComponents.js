import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardText,Button } from 'reactstrap';
 import {Link} from 'react-router-dom';
import Label from 'reactstrap/lib/Label';



function RenderDirectoryItem({event}) {
    return (

        <Card>
            <Link to={`/events/${event.id}`} ></Link>
            <CardImg top width="100%" src="/assets/images/unnamed.jpg" alt="Card image cap" />
            <CardImgOverlay>
                <CardBody>
                <CardTitle className="section-title"><h3>{event.eventName}</h3></CardTitle>
                
            <CardText>
                <Label>Date: </Label> {event.date} <br/>
                <Label>Time: </Label> {event.time} <br/>
                </CardText>
               
                <Button className="btn btn-warning">Join</Button>
                </CardBody>
           </CardImgOverlay>
        </Card>
        
    );
}

function Events(props) {

    const events = props.events.map(event => {
        return (
            <div key={event.id} className="col-md-5 m-1">
                <RenderDirectoryItem event={event}/>
            </div>
        );
    });

    return (
        <section id="events" class="events">
            <div className="container" id="events">
                <div className="row">
                    <div className="col-12">
                        <div class="section-title">
                            <h2>Happiness is <span>Greate Food </span> and <span>Greate Company!! </span> </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {events}
                </div>
            </div>
        </section>    
    );
}

export default Events;