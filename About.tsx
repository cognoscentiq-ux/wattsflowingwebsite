
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400?image=1074" 
              alt="Our Team" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">About WATTS FLOWING LTD</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              WATTS FLOWING LTD is a premier provider of innovative solar and electrical solutions. Our mission is to empower communities and businesses with clean, reliable, and affordable energy. We pride ourselves on our technical expertise, exceptional customer service, and unwavering commitment to quality and safety in every project we undertake.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://picsum.photos/id/237/100/100" 
                  alt="Herbet B.M. Kimemia, C.E.O." 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
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
