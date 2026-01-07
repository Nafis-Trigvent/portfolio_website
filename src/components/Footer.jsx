import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-[85%] mx-auto grid md:grid-cols-3 gap-8">

        {/* Logo / Name */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-100">
            Nafis<span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm">
            Building modern and responsive web experiences with React and Tailwind.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-100 font-semibold mb-2">Quick Links</h3>
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-100 font-semibold mb-2">Connect with me</h3>
          <div className="flex gap-4 mt-2">
              <a
              href="https://github.com/nafis17032005/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nafis-rashdi-a5269933a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500 transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Nafis Rashdi. All rights reserved.
      </div>
    </footer>
  );
}
