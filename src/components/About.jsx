export default function About() {
    return (
        <section
            id="about"
            className="py-20 text-white "
        >
            <div className="max-w-[85%] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <p className="pt-6 text-slate-300 max-w-2xl mx-auto">
                        A short introduction about who I am and what I love to do.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://via.placeholder.com/400x450"

                            alt="About me"
                            className="rounded-2xl shadow-lg w-72 md:w-96 object-cover"
                        />
                    </div>


                    {/* Right Content */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Frontend Developer & UI Enthusiast
                        </h3>


                        <p className="text-slate-300 leading-relaxed mb-6">
                            I am a passionate Full-Stack developer who enjoys building
                            beautiful, responsive, and performance-focused web applications.
                            I love turning ideas into real-world products using modern
                            technologies.
                        </p>


                        <p className="text-slate-300 leading-relaxed mb-8">
                            Currently, I focus on React, Tailwind CSS, and JavaScript while
                            continuously learning new tools and best practices to improve
                            user experience and code quality.
                        </p>


                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                            <p><span className="font-medium">Name:</span> Nafis Rashdi</p>
                            <p><span className="font-medium">Role:</span> Full-Stack Developer</p>
                            <p><span className="font-medium">Experience:</span> Fresher</p>
                            <p><span className="font-medium">Location:</span> India</p>
                        </div>


                        {/* Button */}
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Let’s Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

