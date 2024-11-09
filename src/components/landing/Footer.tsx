const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">ClientIQ</h4>
            <p className="text-primary-200">Empowering businesses worldwide</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-primary-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-primary-200 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-700 text-center text-primary-200">
          <p>&copy; 2024 ClientIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;