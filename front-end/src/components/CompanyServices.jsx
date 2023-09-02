import React from 'react';

const CompanyServices = () => {
 
  const services = [
    {
      title: 'Service 1',
      description: 'Description of Service 1.',
    },
    {
      title: 'Service 2',
      description: 'Description of Service 2.',
    },
  
  ];

  const testimonials = [
    {
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
   
  ];

  return (
    <div className="company-services">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>

      <h2>Customer Testimonials</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <blockquote>{testimonial.text}</blockquote>
            <p>- {testimonial.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyServices;
