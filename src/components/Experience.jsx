export default function Experience() {
    const experiences = [
        {
            role: "Frontend Developer Intern",
            company: "Trigvent Solutions",
            duration: "Jan 2024 – Jun 2024",
            points: [
                "Built responsive UI components using React and Tailwind CSS",
                "Worked closely with designers to convert Figma designs into code",
                "Improved page performance and accessibility",
            ],
        },
        {
            role: "Freelance Frontend Developer",
            company: "Self-Employed",
            duration: "Jul 2024 – Present",
            points: [
                "Developed personal and client portfolio websites",
                "Implemented modern UI/UX patterns and reusable components",
                "Collaborated with clients to deliver clean, scalable solutions",
            ],
        },
    ];

    return (
        <section id="experience" className="">
            <div className="max-w-[85%] mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-blue-600">Experience</span>
                    </h2>
                    <p className="pt-6 text-slate-300 max-w-2xl mx-auto">
                        A quick overview of my professional journey and hands-on experience.
                    </p>
                </div>


                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-slate-200"></div>


                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0
                                    ? "md:flex-row-reverse md:text-right"
                                    : "md:text-left"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>


                                {/* Card */}
                                <div className="bg-white shadow-md border-2  rounded-2xl p-6 md:w-[45%]  hover:border-blue-300 hover:ring-3 hover:ring-blue-600/40 transition ring-offset-2  transform duration-300 hover:-translate-y-2 ">
                                    <h3 className="text-xl text-black font-semibold">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-600 font-medium mt-1">
                                        {exp.company}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {exp.duration}
                                    </p>


                                    <ul className="mt-4 space-y-2 text-slate-900 text-sm">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-blue-600">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                {/* Spacer */}
                                <div className="md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

