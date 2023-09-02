import React from 'react';

const CustomerTestimonials = () => {
  // Sample testimonials data (you can replace this with actual data from your database)
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      comment: 'Vestibulum nec erat eu nulla rhoncus fringilla. Nullam sit amet commodo libero, a gravida augue.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="customer-testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="comment">{testimonial.comment}</p>
            <p className="name">{testimonial.name}</p>
            <p className="company">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
