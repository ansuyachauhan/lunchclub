import React from 'react';

function About(props)
{
    return(
        <section id="about" className="about">
            <div className="container-fluid">

                <div className="row">

                <div className="col-lg-5 d-flex flex-column justify-content-center align-items-stretch">
            <img src="assets/img/about.jpg" alt="About Us"></img>
          </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                        <div className="content">
                        <h3>Food, in the end, in our own tradition, is something holy</h3>
                        <p>
                            The science says eating together can improve camaraderie, which can have long-lasting benifits that carry over to other areas.
                        </p>
                        <p className="font-italic">
                            There’s plenty of evidence that homemade meals are more healthful than restaurant ones
                        </p>
                        <ul>
                            <li><i className="bx bx-check-double"></i>Pull up a chair.</li>
                            <li><i className="bx bx-check-double"></i> Take a taste, Life is so endlessly delicious.</li>
                            <li><i className="bx bx-check-double"></i> Share a Recipe or a picture of your favorite dish and have a drink.</li>
                        </ul>
                        <p>
                            We believe in the power of food to tell stories, enrich our daily lives, deepen our relationships with friends and family, and forge connections with the world around us.
                        </p>
                        </div>

                    </div>

                </div>

            </div>
    </section>
    );
}

export default About;