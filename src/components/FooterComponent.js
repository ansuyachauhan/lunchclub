import React from 'react';

function Footer(props)
{
    return(
       
        <footer id="footer">
          <div className="container">
            <h3>Lunchclub</h3>
            <p>Sugar, spice, and everything nice!</p>
            <div className="social-links">
              <a href="https://twitter.com/" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://facebook.com/" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://instagram.com/" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://linkedin.com/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            <div className="copyright">
              &copy; Copyright <strong><span>LunchClub</span></strong>. All Rights Reserved
            </div>
           
          </div>
        </footer>
    );
}

export default Footer;