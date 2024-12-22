import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="aboutus-container">
        <h1>About Us</h1>
        <div className="aboutus-content">
          <div className="aboutus-image">
            <img src="path/to/your/image.jpg" alt="About Us" />
          </div>
          <div className="aboutus-text">
            <p>Welcome to our company. We provide the best services in the industry.</p>
            <h2>Our Services</h2>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <h2>Our Location</h2>
            <div className="aboutus-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019282509634!2d144.9630579153168!3d-37.81410797975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0f1f0f0f0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  export default Aboutus;