
export const Projects = () => {
    
  const projects = [
    {
      name: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/JO-YE/devwithracheal",
      demo: "https://devwithjoye.vercel.app/",
    },
    {
      name: "AUTOINVENTO",
      description: "A go-to solution for automotive inventory management.",
      tech: ["Python", "Jinja", "Node.js"],
      github: "https://github.com/JO-YE/Auto-Repair_Inventory_Manager",
      demo: 'https://www.youtube.com/watch?v=I-qPkeHgpo0',
    },

    {
      name: "GITHUBVIEWER",
      description: "🚀 Effortlessly navigate profiles, repositories, and issues with ease. ",
      tech: ["Vanilla Js", "Html5", "CSS3"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://oluwadamilolarache.wixsite.com/githubviewer",
    },

    {
      name: "Herbetea",
      description: "A product website built for a project",
      tech: ["React", "Tailwind CSS", "Figma"],
      github: "https://github.com/JO-YE/Health-Wellness-Hub",
      demo: "https://herbetea.vercel.app/",
    },
    {
      name: "Let's code",
      description: "A responsive website for a fictional brand.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/JO-YE/Health-Wellness-Hub",
      demo: "https://let-s-code-wine.vercel.app/",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-white   " id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(({ name, description, tech, github, demo }, i) => (
          <div key={i} className="bg-[#111122] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t, idx) => (
                <span key={idx} className="bg-purple-600 text-xs rounded-full px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-400">
                  GitHub
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-400">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

   