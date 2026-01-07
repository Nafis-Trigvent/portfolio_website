import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur bg-black/90 ">
            <div className="max-w-[85%] mx-auto px-4">
                <div className="flex h-16  items-center justify-between">
                    {/* Logo / Name */}
                    <a href="#home" className="text-xl font-bold tracking-wide">
                        Nafis<span className="text-blue-600"></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative hover:text-blue-400 transition after:absolute after:-bottom-1 after:left-0
                                 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden px-3 py-2 rounded-lg border"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col gap-5 px-6 py-6 text-sm font-medium text-black">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-blue-600 transition"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="w-fit px-4 py-2 rounded-lg bg-blue-600 text-white"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
