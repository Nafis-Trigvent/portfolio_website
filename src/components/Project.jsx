export default function Project() {
    const projects = [
        {
            title: "Portfolio Website",
            description:
                "A modern personal portfolio built with React and Tailwind CSS showcasing projects and experience.",
            tech: ["React", "Tailwind", "JavaScript"],
            live: "#",
            code: "#",
        },
        {
            title: "E-commerce UI",
            description:
                "Frontend UI for an e-commerce platform with product listing, cart UI, and responsive layout.",
            tech: ["React", "Redux", "Tailwind"],
            live: "#",
            code: "#",
        },
        {
            title: "Dashboard App",
            description:
                "A clean admin dashboard with charts, cards, and reusable components.",
            tech: ["React", "Chart UI", "Tailwind"],
            live: "#",
            code: "#",
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-[85%] mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-blue-600">Projects</span>
                    </h2>
                    <p className="pt-6 text-slate-300 max-w-2xl mx-auto">
                        Some of the projects I’ve worked on using modern frontend technologies.
                    </p>
                </div>


                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-slate-200 p-6  hover:border-blue-500 hover:ring-2 hover:ring-blue-500/40 transition ring-offset-2  transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                                {project.title}
                            </h3>


                            {/* Description */}
                            <p className="text-slate-300 text-sm mb-4">
                                {project.description}
                            </p>


                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>


                            {/* Buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={project.live}
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.code}
                                    className="text-sm font-medium text-slate-300 hover:text-blue-600"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}