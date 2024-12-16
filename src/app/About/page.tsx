import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Furniro, your number one source for premium furniture. 
          We’re dedicated to providing you the very best in furniture design, with a focus on 
          quality, craftsmanship, and sustainability.
        </p>
        <p className="text-lg mb-4">
           Furniro has come a long way 
          from its beginnings in [Coral Gables, USA]. When  first started out, their 
          passion for eco-friendly and beautifully crafted furniture drove them to start their 
          own business.
        </p>
        <p className="text-lg">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have 
          any questions or comments, please don’t hesitate to contact us.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Furniro, we aim to revolutionize how people experience furniture 
            by combining innovative designs with sustainability. Every product is crafted with 
            love and care to bring a touch of elegance and comfort to your space.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg">
            Our team is a diverse group of talented designers, craftsmen, and customer service 
            professionals who are dedicated to creating the best experience for you. Together, 
            we strive to bring beauty and utility into your life through our furniture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;