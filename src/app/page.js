
"use client"
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX, FiArrowDown } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import axios from "axios";
import Sendmessage from "@/components/Sendmessage";
import About from "@/components/About";

export default function Home() {
  // Navigation state
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hero state
  const [currentService, setCurrentService] = useState(0);

  // Services state
  const [activeServiceCard, setActiveServiceCard] = useState(0);

  // Portfolio state
  const [activeFilter, setActiveFilter] = useState("all");

  // Testimonials state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);


  // Data arrays
  const services = [
    "Frontend Development",
    "Event Planning",
    "Catering Services",
    "Cake Baking",
    "Real Estate"
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const serviceData = [
    {
      title: "Frontend Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Friendly"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      icon: "💻"
    },
    {
      title: "Event Planning",
      description: "Complete event coordination from concept to execution for weddings, corporate events, and special occasions.",
      features: ["Wedding Planning", "Corporate Events", "Birthday Parties", "Full Coordination"],
      image: "/image/event2.jpg",
      icon: "🎉"
    },
    {
      title: "Catering Services",
      description: "Delicious, high-quality catering for events of all sizes with customizable menus.",
      features: ["Custom Menus", "Dietary Options", "Professional Service", "Event Setup"],
      image: "/image/event1.jpg",
      icon: "🍽️"
    },
    {
      title: "Cake Baking & Decoration",
      description: "Custom cakes designed and baked fresh for your special occasions with creative decoration.",
      features: ["Pastries", "Fresh Ingredients", "All Occasions", "Delivery Available"],
      image: "/image/cakes.jpg",
      icon: "🎂"
    },
    {
      title: "Real Estate Services",
      description: "Professional assistance with buying, selling, and renting properties with market expertise.",
      features: ["Property Sales", "Rental Services", "Market Analysis", "Property Management"],
      image: "/image/realesate.jpg",
      icon: "🏠"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "development",
      image: "/image/website1.jpg",
      description: "Responsive online store with payment integration"
    },
 {
      id: 2,
      title: "Modern E-commerce Website",
      category: "development",
      image: "/image/web1.jpg",
      description: "Responsive online store with payment integration"
    },

     {
      id: 3,
      title: "Modern E-commerce Website",
      category: "development",
       image: "/image/web2.jpg",
      description: "Responsive online store with payment integration"
    },
    {
      id: 4,
      title: "Birthday Parties Reception",
      category: "events",
      image: "/image/event2.jpg",
      description: "300 guest birthday party with full coordination"
    },
    {
      id: 5,
      title: "Elegant Wedding Reception",
      category: "events",
      image: "/image/eventw.jpg",
      description: "1000 guest wedding with full coordination"
    },

 {
      id: 6,
      title: "Shareholder Meetings",
      category: "events",
      image: "/image/eventw1.jpg",
      description: "250 guest shareholder meeting with full coordination"
    },
    {
      id: 7,
      title: "Award Ceremonies & Galas",
      category: "catering",
      image: "/image/event1.jpg",
      description: "5 course dinner for 100 executives"
    },
  {
      id: 8,
      title: "Summits & Diplomatic Dinners",
      category: "catering",
      image: "/image/eventc.jpg",
      description: "Dinner for 300 executives"
    },
     {
      id: 9,
      title: "Celebrity Weddings/Birthdays",
      category: "catering",
      image: "/image/eventc1.jpg",
      description: "Dinner for Celebrity Weddings/Birthdays for 450 guests"
    },
    {
      id: 10,
      title: "Custom Birthday Cake",
      category: "cakes",
      image: "/image/cakes.jpg",
      description: "2 tier fondant cake with unique decorations"
    },
     {
      id: 11,
      title: "Platinum Cake",
      category: "cakes",
      image: "/image/cakeforevent.jpg",
      description: "uncovered cake with fresh fruits and flowers"
    },
     {
      id: 12,
      title: "Wedding Cake",
      category: "cakes",
      image: "/image/cake2.jpg",
      description: "3 tier fondant cake with custom decorations"
    },
    {
      id: 13,
      title: "Documentation/Quality Control",
      category: "realestate",
      image: "/image/realesate.jpg",
      description: "Property documentation and quality control for real estate projects"
    },
      {
      id: 14,
      title: "Site Engineer",
      category: "realestate",
      image: "/image/real1.jpg",
      description: "Technical Supervision of construction projects with a focus on quality and safety"
    },

    {
      id: 15,
      title: "Luxury Family Home",
      category: "realestate",
      image: "/image/real2.jpg",
      description: "4-bedroom home sold in 4 weeks"
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "development", label: "Development" },
    { id: "events", label: "Events" },
    { id: "catering", label: "Catering" },
    { id: "cakes", label: "Cakes" },
    { id: "realestate", label: "Real Estate" }
  ];

  const testimonials = [
    {
      name: "Olufunmilayo Omowunmi",
      role: "Bride",
      service: "Event Planning",
      content: "Absolutely amazing! She planned our dream wedding perfectly. Every detail was taken care of, and the day was magical. Highly recommend!",
      rating: 5,
      image: "/image/eventc1.jpg"
    },
    {
      name: "Kolapo Taofeeq",
      role: "Technical Director",
      service: "Frontend Development",
      content: "The website she built for our company exceeded all expectations. Professional, fast, and exactly what we needed to grow our business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ajao Olayinka",
      role: "Property Buyer",
      service: "Real Estate",
      content: "Found us the perfect land within our budget. Her knowledge of the market and dedication to clients is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ibiloye Abisola",
      role: "Corporate Client",
      service: "Catering",
      content: "The catering for our company event was exceptional. Delicious food, professional service, and great attention to dietary requirements.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mrs Royal",
      role: "Mother",
      service: "Cake Baking",
      content: "The custom cake for my daughter's birthday was absolutely stunning and delicious. She captured exactly what we envisioned!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  const handleWhatsAppClick = () => {
    const phoneNumber = "09032434519";
    const message = "Hi! I'm interested in your services. Can we discuss?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
             <div className="flex items-center space-x-2">
              <div className="">
                  <img
                      src="/image/desire-hub1.png"
                      alt="logo"
                      className="lg:w-[150px] h-[45px] rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                 </div>

              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home">
          <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
              <div className="text-center">
                <div className="animate-fade-in">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DESIRE
                    </span>
                  </h1>

                  <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 h-16 flex items-center justify-center">
                    <span>Expert in </span>
                    <span className="ml-2 font-semibold text-blue-600 transition-all duration-500">
                      {services[currentService]}
                    </span>
                  </div>

                  <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    From building beautiful websites to planning unforgettable events, baking delicious cakes,
                    and helping you find your dream property I bring passion and expertise to everything I do.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Get Started Today
                    </button>
                    <button
                      onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                    >
                      View My Work
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 pt-20 transform -translate-x-1/2 animate-bounce">
                <button
                  onClick={scrollToAbout}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FiArrowDown className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </section>


 {/* About Section */}
       <About/>
        {/* About Section */}
<section id="about">
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Welcome! I&nbsp;m a passionate Frontend Developer with a unique blend of technical expertise
              and creative services. My journey began in web development, where I discovered my love
              for creating beautiful, functional digital experiences.
            </p>
            <p>
              Over the years, I&nbsp;ve expanded my skills beyond coding to include event planning,
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

        <div className="relative">
          {/* Image Rotator */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-96">
            {/* Replace these with your actual images */}
             <img
              src="/image/me1.jpg"
              alt="me"
              className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
              id="rotating-image"
            />
             <img
              src="/image/me2.jpg"
              alt="me"
              className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
              id="rotating-image"
            />
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop"
              alt="Web Development"
              className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
              id="rotating-image"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl"></div>
          {/* Image Selector Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
                onClick={() => changeImage(index)}
                aria-label={`Show image ${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Services Section */}
        <section id="services">
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  My Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From digital solutions to life&apos;s special moments, I offer a comprehensive range of services
                  to meet all your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceData.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                      activeServiceCard === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setActiveServiceCard(index)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Portfolio & Gallery
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore my recent work across different services and see the quality and creativity
                  I bring to every project.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What Clients Say
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Dont just take my word for it hear from the amazing clients Ive had the pleasure to work with.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                      />
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                      {testimonials[currentTestimonial].content}
                    </blockquote>

                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].service}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index
                          ? "bg-blue-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to start your project? Id love to hear from you. Lets discuss how I can help bring your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Lets Connect</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FaEnvelope className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">adeyemok831@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <FaPhone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <div className="text-gray-600">+234 9032434519</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <FaMapMarkerAlt className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-600">Ilorin City, Kwara State</div>
                      </div>
                    </div>
                  </div>
     <div className="mt-8">
  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com/olamide.adeyemo.94/" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
      <span className="sr-only">Facebook</span>
      <Facebook className="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/adesire603/" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
      <span className="sr-only">Instagram</span>
      <Instagram className="w-5 h-5" />
    </a>
    <a href="https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248/" className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
      <span className="sr-only">LinkedIn</span>
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="https://t.me/Desire390" className="bg-blue-300 text-white p-3 rounded-lg hover:bg-blue-400 transition-colors">
      <span className="sr-only">Telegram</span>
      <Send className="w-5 h-5" /> {/* Lucide uses 'Send' for Telegram */}
    </a>
  </div>
</div>
</div>
<div className="">
<Sendmessage/>
</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="pb-5">
        <img
                     src="/image/desire-hub2.png"
                      alt="logo"
                      className="w-[150px] h-[50px]  transform transition-transform duration-300 hover:scale-105"
                    />
      </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Bringing expertise in frontend development, event planning, catering, cake baking,
                and real estate services to help you achieve your goals.
              </p>
               <div className="flex space-x-4">
    <a href="https://www.facebook.com/olamide.adeyemo.94/" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
      <span className="sr-only">Facebook</span>
      <Facebook className="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/adesire603/" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
      <span className="sr-only">Instagram</span>
      <Instagram className="w-5 h-5" />
    </a>
    <a href="https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248/" className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
      <span className="sr-only">LinkedIn</span>
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="https://t.me/Desire390" className="bg-blue-300 text-white p-3 rounded-lg hover:bg-blue-400 transition-colors">
      <span className="sr-only">Telegram</span>
      <Send className="w-5 h-5" />
    </a>
  </div>
    </div>
        <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Frontend Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Catering Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cake Baking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
            <p>&copy; {currentYear} Desire. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transform hover:scale-110 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </button>
    </div>
  );
};
