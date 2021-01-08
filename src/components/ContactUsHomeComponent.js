import React from "react";

function ContactUsHome(props)
{
    return(
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                <h2><span>Contact</span> Us</h2>
                </div>
            </div>

            

            <div className="container mt-5">

                <div className="info-wrap">
                <div className="row">
                    <div className="col-lg-3 col-md-6 info">
                    <i className="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>504 new street<br/>Austin TX 78727</p>
                    </div>

                    <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@lunchclub.com<br/>contact@lunchclub.com</p>
                    </div>

                    <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 714 898 3453<br/>+1 818 123  4514</p>
                    </div>
                </div>
                </div>

                <form >
                <div className="form-row">
                    <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                    </div>
                    <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                </div>
                <div className="form-group">
                    <div className="text-center"><button className="btn btn-warning" type="submit">Send Message</button></div>
                </div>
                
                
                </form>

            </div>
         </section>
        

    );
}

export default  ContactUsHome;