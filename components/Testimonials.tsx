import React from 'react';

const QuoteIcon: React.FC = () => (
  <svg className="w-10 h-10 text-orange-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a.75.75 0 00.44.693l4.755 2.377a.75.75 0 00.82-.123l2.879-3.599a.75.75 0 00-.094-1.037l-2.071-1.553A2.5 2.5 0 005.5 3zm8.5 0A2.5 2.5 0 0011.5 5.5v2.879a.75.75 0 00.44.693l4.755 2.377a.75.75 0 00.82-.123l2.879-3.599a.75.75 0 00-.094-1.037l-2.071-1.553A2.5 2.5 0 0014 3z" clipRule="evenodd" />
  </svg>
);


interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      <QuoteIcon />
      <p className="text-gray-600 italic mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-orange-200" />
        <div>
          <h4 className="font-bold text-blue-800 text-lg">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Watts Flowing transformed our home with a seamless solar installation. The team was professional, efficient, and the energy savings are incredible. Highly recommended!",
      name: 'Jane Doe',
      role: 'Residential Client',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      quote: "Their expertise in commercial electrical systems is unmatched. They designed and implemented a solution that perfectly met our business needs, on time and on budget.",
      name: 'John Smith',
      role: 'Business Owner',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      quote: "The maintenance service is top-notch. They are always responsive and ensure our solar farm operates at peak performance year-round. A truly reliable partner.",
      name: 'Samuel Green',
      role: 'Farm Manager',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">What Our Clients Say</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to have earned the trust of our clients. Here's what they have to say about their experience with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;