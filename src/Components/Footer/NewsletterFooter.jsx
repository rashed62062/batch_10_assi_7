 import footerImg from '../../assets/logo-footer.png'
export default function NewsletterFooter() {
  return (
    <div className="bg-gray-900 text-white py-10">
      
      {/* Newsletter Section */}
      <div className="flex items-center outline outline-3 outline-offset-2 justify-center lg:m-10 py-20 px-8 sm:px-12 lg:px-16 bg-gradient-to-r from-yellow-100 to-blue-100 shadow-lg 
      rounded-lg mx-4 mb-10">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Subscribe to our Newsletter</h2>
          <p className="mb-4 text-gray-700">Get the latest updates and news right in your inbox!</p>
          <div className="flex justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 px-20 rounded-l-lg border border-gray-300 outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        {/* Logo in the Center */}
        <div className="text-center ">
            <img src={footerImg} alt="Logo" className="h-16 mx-auto mb-4 w-auto h-full"/>
          </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 px-4 md:px-0">
          
          {/* About Us Section */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe Section in Footer */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg border-none outline-none"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <div><hr /></div>
          <div className='mt-4'>          @2024 Your Company All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
