import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1558227448-e4b2a48a04a3?q=80&w=1740&auto=format&fit=crop" 
              alt="Our team installing solar panels" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">About WATTS FLOWING LTD</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              WATTS FLOWING LTD is a premier provider of innovative solar and electrical solutions. Our mission is to empower communities and businesses with clean, reliable, and affordable energy. We pride ourselves on our technical expertise, exceptional customer service, and unwavering commitment to quality and safety in every project we undertake.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-slate-200 border-4 border-white shadow-md shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-800">Herbet B.M. Kimemia</h4>
                  <p className="text-gray-500 font-semibold">C.E.O, WATTS FLOWING LTD</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 italic">
                "Our vision is to be at the forefront of the renewable energy revolution, delivering sustainable power solutions that make a real difference."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;