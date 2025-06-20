import React from 'react';

const App = () => {
  return (
    // Main container with improved responsive background and min-height
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col font-sans relative overflow-hidden
                    before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-transparent before:via-blue-200/30 before:to-transparent before:animate-pulse-slow before:opacity-50 before:pointer-events-none before:z-0">

      {/* Header Section */}
      <header className="relative z-10 w-full bg-white bg-opacity-80 backdrop-blur-sm shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between rounded-b-xl">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <span className="text-2xl font-extrabold text-gray-800">LzyCrazy</span>
          <span className="text-base text-gray-600 hidden md:block">Business Shopping Entertainment</span>
        </div>
        <div className="text-lg text-gray-700 font-semibold px-4 py-2 bg-blue-100 rounded-full shadow-sm">Login to LzyCrazy</div>
      </header>

      {/* Main Content Section */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row bg-white bg-opacity-95 rounded-4xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">

          {/* Left Section - Navigation and Brand */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between items-center text-center">
            <div>
              {/* Logo Area */}
              <div className="flex flex-col items-center justify-center mb-8">
                <img
                  src="my-vite-app\src\assets\lzy logo-Cl4gUC2f.png"
                  alt="Lazy Crazy Logo"
                  className="w-56 h-auto mb-4 animate-fade-in" // Increased size, added fade-in animation
                />
                <p className="text-2xl font-bold text-gray-800 mb-2">Your Dream Our Desire</p>
                <p className="text-lg text-gray-600 mb-8">Business Shopping Entertainment</p>
              </div>

              {/* Search Bar */}
              <div className="mb-10 relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search here ...."
                  className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 shadow-inner"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Navigation Links - as pills with better styling */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">About Us</button>
                <button className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">LzyCrazy Services</button>
                <button className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">LzyCrazy Marketplace</button>
                <button className="px-6 py-3 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">We Are Hiring</button>
                <button className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">LzyCrazy News</button>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="lg:w-1/2 p-8 lg:p-16 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-r-4xl">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login to LzyCrazy</h2>

              <div className="space-y-5 mb-8">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 shadow-inner"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 shadow-inner"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm3 4V4a3 3 0 10-6 0v2h6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <a href="#" className="block text-right text-sm text-purple-600 hover:underline mb-8">
                Forgot Password?
              </a>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold py-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-105 mb-8">
                Login
              </button>

              {/* Or continue with divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">- or continue with -</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-gray-700 font-semibold py-3 rounded-xl shadow-md border border-gray-300 hover:bg-gray-50 transition duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-6 h-6" />
                  <span>Google</span>
                </button>

                <button className="w-full bg-white text-gray-700 font-semibold py-3 rounded-xl shadow-md border border-gray-300 hover:bg-gray-50 transition duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="Facebook" className="w-6 h-6" />
                  <span>Facebook</span>
                </button>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold py-4 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 mt-8">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 w-full bg-white bg-opacity-80 backdrop-blur-sm shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 rounded-t-xl">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <span>IndiaLzyCrazy offered in</span>
          <select className="bg-gray-100 rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="flex space-x-6 text-base">
          <a href="#" className="hover:underline hover:text-blue-600 transition duration-200">Privacy</a>
          <a href="#" className="hover:underline hover:text-blue-600 transition duration-200">Terms</a>
        </div>
      </footer>

      {/* Tailwind Keyframes for Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        /* Responsive adjustments for overall layout */
        @media (min-width: 1024px) {
          .lg\\:w-1\\/2 {
            width: 50%;
          }
        }

        /* Ensure min-height works correctly across browsers */
        .min-h-screen-dvh {
          min-height: 100dvh;
          min-height: 100vh; /* Fallback for older browsers */
        }
      `}</style>
    </div>
  );
};

export default App;
