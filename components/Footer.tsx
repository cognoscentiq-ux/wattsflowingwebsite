import React from 'react';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.591a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01-1.06 0l-1.59-1.591a.75.75 0 111.06-1.06l1.591 1.59a.75.75 0 010 1.061zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM6.106 17.894a.75.75 0 010-1.06l1.591-1.59a.75.75 0 111.06 1.06l-1.59 1.591a.75.75 0 01-1.06 0zM4.5 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zM6.106 6.106a.75.75 0 011.06 0l1.59 1.591a.75.75 0 11-1.06 1.06L6.106 7.167a.75.75 0 010-1.06z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <SunIcon className="w-8 h-8 text-orange-400" />
              <span className="text-xl font-bold tracking-tight">WATTS FLOWING LTD</span>
            </a>
            <p className="text-blue-200">
              Your trusted partner in sustainable solar and electrical solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-start"><span className="mr-2 mt-1">&#9679;</span> Cosmas Ndeti Road, Imara Daima</li>
              <li className="flex items-start"><span className="mr-2 mt-1">&#9679;</span> 0722 623 370</li>
              <li className="flex items-start"><span className="mr-2 mt-1">&#9679;</span> wattsflowing2023@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Follow Us</h3>
            <p className="text-blue-200 mb-4">Stay connected on social media.</p>
            {/* Placeholder for social icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} WATTS FLOWING LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
