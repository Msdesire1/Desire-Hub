import React from 'react'
import { useState, useEffect } from 'react'
const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of your images
  const images = [
    { src: "/image/me1.jpg", alt: "About me" },
    { src: "/image/tulugirl.jpg", alt: "About me" },
    { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop", alt: "Web Development" },
    { src: "/image/morecake.jpg", alt: "About me" },
     { src: "/image/eventc.jpg", alt: "About me" },
      { src: "/image/me1.jpg", alt: "About me" },
  ];

  // Function to change image
  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Optional: Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about">
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column (your content) */}
                <div className="animate-fade-in">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    About Me
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Welcome! I m a passionate Frontend Developer with a unique blend of technical expertise
                      and creative services. My journey began in web development, where I discovered my love
                      for creating beautiful, functional digital experiences.
                    </p>
                    <p>
                      Over the years, I ve expanded my skills beyond coding to include event planning,
                      catering, cake decorating, and real estate services. This diverse background allows
                      me to bring a unique perspective to every project, combining technical precision
                      with creative flair.
                    </p>
                    <p>
                      Whether you need a stunning website, an unforgettable event, delicious catering,
                      a perfect cake, or help with real estate, I m committed to delivering exceptional
                      results that exceed your expectations.
                    </p>
                  </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right column (image rotator) */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-96">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={currentImageIndex} // Important for forcing re-render
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl"></div>

              {/* Image selector dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-gray-400 focus:outline-none`}
                    onClick={() => changeImage(index)}
                    aria-label={`Show image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;