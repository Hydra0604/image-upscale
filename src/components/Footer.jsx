export default function Footer() {
  return (
    <footer className="bg-white text-sm text-[#4b74b5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 py-8">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <p className="text-center font-medium mb-8">
          &copy; {new Date().getFullYear()} ImageEnhance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
