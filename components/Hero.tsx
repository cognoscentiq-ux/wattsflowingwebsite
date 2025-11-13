import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen md:h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/id/20/3670/2462.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Powering Your Future with <span className="text-orange-400">Sustainable Energy</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Expert solutions in solar and electrical design, sales, and maintenance. We are committed to delivering excellence and reliability.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-lg w-full sm:w-auto"
            >
              Get a Free Quote
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-800 transition-all duration-300 w-full sm:w-auto"
            >
              Our Services
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
