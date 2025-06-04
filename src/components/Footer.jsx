export default function Footer() {
  return (
    <footer className="bg-white text-center py-8 text-sm text-[#4b74b5]">
      <div className="flex justify-center gap-30 mb-3 font-medium">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
      <p className="text-[#4b74b5] font-medium">
        &copy; {new Date().getFullYear()} ImageEnhance. All rights reserved.
      </p>
    </footer>
  );
}
