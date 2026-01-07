import profile_image from '../assets/images/profile_image.jpg'
export default function Home() {
    return (
        <section
            id="home"
            className=" flex items-center "
        >
            <div className="max-w-[85%] pb-10 pt-30 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-blue-600 font-semibold mb-3">
                        Hi, my name is
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Nafis <span className="text-blue-600">Rashdi</span>
                    </h1>

                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-100">
                        Full-Stack Devloper
                    </h2>

                    <p className="mt-6 text-slate-300 max-w-xl">
                        I build clean, responsive, and user-friendly web applications
                        using React and Tailwind CSS .
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-20"></div>
                        <img
                            src={profile_image}
                            alt="Profile"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl hover:ring-2 ring-amber-400"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
