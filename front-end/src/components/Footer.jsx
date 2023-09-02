import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Your company's mission and a brief description can go here.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <address>
              <p>
                Address: 123 Main Street<br />
                City, State ZIP<br />
                Email: example@example.com<br />
                Phone: (123) 456-7890
              </p>
            </address>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="icon-facebook"></a>
              <a href="#" className="icon-twitter"></a>
              <a href="#" className="icon-linkedin"></a>
              <a href="#" className="icon-instagram"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
