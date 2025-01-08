const Footer = () => {
  return (
    <footer className="bg-[#060606] text-white p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-lg font-bold">Company</h5>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        {/* Similar changes for other columns */}
      </div>
      <div className="text-center text-sm mt-6 text-gray-400">
        &copy; Learn Sphere, Inc. 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
