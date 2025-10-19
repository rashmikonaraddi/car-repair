"use client";

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

    const galleryImages = [
    { id: 1, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg", alt: "Car Service 1" },
    { id: 2, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg", alt: "Car Service 2" },
    { id: 3, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg", alt: "Car Service 3" },
    { id: 4, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg", alt: "Car Service 4" },
    { id: 5, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg", alt: "Car Service 5" },
    { id: 6, src: "https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg", alt: "Car Service 6" },
    // { id: 7, src: "https://themehealer.com/php-template/crank-php/assets/images/resources/gallery-1-7.jpg", alt: "Car Service 7" },
    // { id: 8, src: "https://themehealer.com/php-template/crank-php/assets/images/resources/gallery-1-8.jpg", alt: "Car Service 8" },
    // { id: 9, src: "https://themehealer.com/php-template/crank-php/assets/images/resources/gallery-1-9.jpg", alt: "Car Service 9" }
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Basic Service",
      price: "$49",
      period: "per visit",
      description: "Essential maintenance for your vehicle",
      features: [
        "Oil change",
        "Tire pressure check",
        "Fluid level inspection",
        "Basic safety check",
        "Vacuum cleaning"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Premium Package",
      price: "$129",
      period: "per month",
      description: "Comprehensive care for regular drivers",
      features: [
        "All Basic features",
        "Brake inspection",
        "Battery testing",
        "Filter replacement",
        "Wheel alignment check",
        "Priority scheduling",
        "10% parts discount"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Elite Plan",
      price: "$249",
      period: "per month",
      description: "Premium care for luxury vehicles",
      features: [
        "All Premium features",
        "Engine diagnostics",
        "Transmission service",
        "AC system check",
        "Suspension inspection",
        "Free loaner car",
        "24/7 roadside assistance",
        "15% parts discount"
      ],
      popular: false
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Car Maintenance Tips for Summer",
      excerpt: "Keep your vehicle running smoothly during the hot months with these crucial maintenance tips.",
      date: "June 15, 2023",
      author: "John Smith",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-1.jpg"
    },
    {
      id: 2,
      title: "Understanding Your Car's Warning Lights",
      excerpt: "Don't ignore these dashboard indicators - learn what they mean and when to take action.",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-2.jpg"
    },
    {
      id: 3,
      title: "The Benefits of Regular Oil Changes",
      excerpt: "Why regular oil changes are one of the most important services for your vehicle's longevity.",
      date: "April 10, 2023",
      author: "Michael Brown",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-3.jpg"
    },
    {
      id: 4,
      title: "Preparing Your Car for Winter",
      excerpt: "Essential steps to winterize your vehicle and ensure safe driving in cold conditions.",
      date: "November 5, 2022",
      author: "Emily Davis",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-4.jpg"
    },
    {
      id: 5,
      title: "Signs It's Time to Replace Your Brake Pads",
      excerpt: "Recognize the warning signs that indicate your brake pads need immediate attention.",
      date: "March 22, 2023",
      author: "Robert Wilson",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-5.jpg"
    },
    {
      id: 6,
      title: "How to Extend the Life of Your Car Battery",
      excerpt: "Simple practices that can significantly increase your battery's lifespan and performance.",
      date: "February 14, 2023",
      author: "Jennifer Lee",
      image: "https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-6.jpg"
    }
  ];

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen'>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image 
                  src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" 
                  alt="Crank Auto Services Logo" 
                  width={120} 
                  height={40} 
                />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-red-600 dark:text-red-500 border-b-2 border-red-500 px-1 pt-1 text-sm font-medium">Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">About Us</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">Services</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">Gallery</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">Pricing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">Blog</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-1 pt-1 text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                Book Now
              </button>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="bg-red-50 border-red-500 text-red-600 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About Us</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Services</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Gallery</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Pricing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Blog</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
              <button className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-base font-medium">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Where Quality Is A</span>
                  <span className="block text-red-500">Service Meets The Open Road</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Professional car service is essential for maintaining the performance and longevity of your vehicle. From oil changes to major repairs, we've got you covered.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <Image
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
              alt="Car repair service"
              layout="fill"
              objectFit="cover"
              className="rounded-l-3xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-4 -mt-10 md:-mt-16 relative z-10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">600+</p>
              <p className="mt-1 text-base font-medium text-gray-500 dark:text-gray-300">Team Members</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">2K+</p>
              <p className="mt-1 text-base font-medium text-gray-500 dark:text-gray-300">Services Completed</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">53+</p>
              <p className="mt-1 text-base font-medium text-gray-500 dark:text-gray-300">Winning Awards</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">3K+</p>
              <p className="mt-1 text-base font-medium text-gray-500 dark:text-gray-300">Client Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-12 bg-amber-50 dark:bg-violet-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Latest Services</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Your Trusted Car Provider<br />
              <span className="text-red-600">Keeping Your Vehicle</span>
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Transformation Advising",
                  description: "Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes to major repairs.",
                  icon: "🔧"
                },
                {
                  title: "Easy Drive Maintenance",
                  description: "Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes to major repairs.",
                  icon: "🚗"
                },
                {
                  title: "Elite Auto Services",
                  description: "Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes to major repairs.",
                  icon: "⚙️"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Fast and Reliable Car Care<br />
                <span className="text-red-600">Your Car Our Priority</span>
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes to major repairs, our expert technicians ensure your car runs smoothly.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">Fast and Reliable Car Care Your Car Our Priority</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">Free with Our Services Care for Your Car</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">Top-notch Care for Your Vehicle Your Vehicle</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">Expert Service for Your Vehicle Drive Stress</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">Your Trusted Car Service Provider Keeping</p>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
                  alt="About Crank Auto Services"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {--Gallery Section------} */}
      <div id='gallery' className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Portfolio</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    Before & After Transformations
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
                    Browse our gallery of completed projects and satisfied customers
                  </p>
                </div>
      
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-64">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{image.alt}</h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Project completed</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      
                <div className="mt-12 text-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                    Load More
                  </button>
                </div>
              </div>
        </div>

      {/* {Pricing Section} */}
      <div id='pricing' className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Pricing Plans</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Affordable Auto Care Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              All plans include our commitment to quality service and customer satisfaction
            </p>
          </div>

          <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative p-8 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg flex flex-col ${
                  plan.popular ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 py-1.5 px-4 bg-red-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="text-xl font-semibold">{plan.period}</span>
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{plan.description}</p>
                  
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.popular 
                        ? 'text-white bg-red-600 hover:bg-red-700' 
                        : 'text-red-600 bg-white hover:bg-gray-50 border border-red-600'
                    }`}
                  >
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div id='blogs' className="py-16 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Blog</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    Latest News & Tips
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
                    Stay informed with our expert advice and industry insights
                  </p>
                </div>
      
                <div className="mt-12">
                  <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="flex-shrink-0">
                          <div className="h-48 w-full relative">
                            <Image
                              src={post.image}
                              alt={post.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-6 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-red-600 dark:text-red-400">
                              Article
                            </p>
                            <a href="#" className="block mt-2">
                              <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                            </a>
                          </div>
                          <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                              <span className="sr-only">{post.author}</span>
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                {post.author.charAt(0)}
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                                <time dateTime={post.date}>{post.date}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

      {/* Contact Section */}
      <div id='contact'className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Address</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        123 Auto Service Street<br />
                        Carville, CV 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        (123) 456-7890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        info@crankautoservices.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Working Hours</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        Monday - Friday: 8AM - 6PM<br />
                        Saturday: 9AM - 4PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Follow Us</h3>
                  <div className="mt-4 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Map Section */}
              <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
                <div className="h-96 w-full relative">
                  {/* Placeholder for Google Maps */}
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500">
                    Google Maps Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brands Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Partners</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">Trusted by Leading Brands</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png",
              "https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png",
              "https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png",
              "https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png",
              "https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png"
            ].map((brand, index) => (
              <div key={index} className="flex justify-center">
                <Image 
                  src={brand} 
                  alt={`Brand ${index + 1}`} 
                  width={120} 
                  height={60} 
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}