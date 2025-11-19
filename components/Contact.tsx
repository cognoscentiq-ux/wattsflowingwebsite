import React, { useState } from 'react';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* simplified phone path */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.45 1.12l-1.6 1.05a11 11 0 005.15 5.15l1.05-1.6a1 1 0 011.12-.45l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Contact: React.FC = () => {
  // Controlled form state
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  // Destination email requested
  const destinationEmail = 'wattsflowing2023@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Minimal validation
    if (!name.trim() && !fromEmail.trim() && !message.trim()) {
      // If everything is empty, do nothing (or you can show an alert)
      alert('Please provide at least a name, an email, or a message before sending.');
      return;
    }

    const subject = `Website message from ${name || 'Visitor'}`;
    const bodyLines = [
      `Name: ${name || ''}`,
      `Email: ${fromEmail || ''}`,
      '',
      message || '',
    ];
    const body = bodyLines.join('\n');

    // Build mailto link with proper encoding
    const mailto = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's default mail client
    // Use window.location.href (works in most browsers) or window.open
    window.location.href = mailto;
  };

  const contactInfo = [
    { icon: <LocationIcon />, text: 'Cosmas Ndeti Road, Imara Daima' },
    { icon: <PhoneIcon />, text: '0722 623 370' },
    { icon: <EmailIcon />, text: 'wattsflowing2023@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">Get In Touch</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or need a consultation? We'd love to hear from you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 bg-blue-800 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8 text-blue-100">Fill up the form and our Team will get back to you within 24 hours.</p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-orange-400 shrink-0">{info.icon}</div>
                  <span className="text-base sm:text-lg">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="John Doe"
                    aria-label="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="john.doe@example.com"
                    aria-label="Email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Tell us about your project or inquiry..."
                  aria-label="Message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;