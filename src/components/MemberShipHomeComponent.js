import React from 'react';

function MembershipHome(props)
{
    return(
        <section id="membership" className="membership">
        <div className="container">
  
          <div className="section-title">
            <h2>Want to be <span>a part of the LunchClub?</span></h2>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4">
              <div className="box">
                  <a href="varshik.html">
                      <span>01</span>
                      <h4>Varshik</h4>
                      <p> Access to all the parties in a year with plus one</p>
                  </a>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                   <a href="penca.html">
                      <span>02</span>
                      <h4>Penca</h4>
                      <p>Enjoy five parties in a year with limited plus one! </p>
                      </a>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                  <a href="eka.html">
                      <span>03</span>
                      <h4> Eka</h4>
                      <p> An introductory memebership for an indivial to one of the parties</p>
                  </a>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );

}
export default MembershipHome;