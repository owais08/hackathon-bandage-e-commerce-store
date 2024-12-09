const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Company Info</h4>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>We Are Hiring</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Resources</h4>
          <ul className="mt-4 space-y-2">
            <li>iOS & Android</li>
            <li>Live Chat</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Newsletter</h4>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center mt-10 text-gray-500">
        Made With Love © 2024 Bandage
      </p>
    </footer>
  );
};

export default Footer;
