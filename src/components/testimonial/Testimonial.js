// src/components/TestimonialCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';
import Client1 from '../../assets/images/client1.png'

const testimonials = [
  {
    quote: "This service is amazing. It has changed my life!",
    author: "John Doe",
    position: "CEO, Company Inc.",
    image: Client1
  },
  {
    quote: "Highly recommended for everyone.",
    author: "Jane Smith",
    position: "Manager, Business Ltd.",
    image: Client1
  },
  {
    quote: "Great experience and fantastic support.",
    author: "Mary Johnson",
    position: "Developer, Tech Corp.",
    image: Client1
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt={testimonial.author} className="client-image"/>
          <p className="quote">"{testimonial.quote}"</p>
          <p className="author">{testimonial.author}</p>
          <p className="position">{testimonial.position}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
