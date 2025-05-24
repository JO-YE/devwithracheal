import { useState, useEffect, useRef} from "react";

export const Projects = () => {
    
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

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

  // if showAll is triggered, display all project, if not show from index 0 to 2
  const displayProjects = showAll ? projects : projects.slice(0, 2);

  // handingly touch/mouse event for swipe
  const handleStart = (user) => {
    setIsDragging(true);

    const clientY = user.type === "mousedown" ? user.clientY : user.touches[0].clientY;
    setStartY(clientY);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMove = (user) => {
    if(!isDragging) return;
    user.preventDefault();

    const clientY = user.type === "mousemove" ? user.clientY : user.touches[0].clientY;
    const deltaY = startY - clientY;

    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTop + deltaY;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // wheel event for desktop scrolling
  const handleWheel = (user) => {
    if (containerRef.current) {
      user.preventDefault();
      containerRef.current.scrollTop += user.deltaY;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);



  return (
    <section className="max-w-5xl mx-auto px-4  text-white  " id="projects">
      <h2 className="text-3xl font-bold mb-5 text-center">Projects</h2>

      <div 
      ref={containerRef}
      className={`relative ${showAll ? 'h-96 overflow-y-auto' : 'h-90 overflow-hidden'} mb-5`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        cursor: isDragging ? "zoom-in" : "zoom-out"
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {displayProjects.map((project, i) => (
          <div
            key={i}
            className={`absolute w-full transition-all duration-500 ease-out ${
              showAll 
                ? `relative mb-6 transform-none` 
                : `transform ${i === 0 ? 'translate-y-0 z-30' : i === 1 ? 'translate-y-4 z-20 scale-95' : 'translate-y-8 z-10 scale-90'}`
            }`}
            style={!showAll ? {
              top: `${i * 90}px`,
              opacity: i > 2 ? 0 : 0.7 + (0.3 * (3 - i)) / 3
            } : {}}>

              {/** project container */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-full p-6 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.tech.map((t, idx) => (
                <span key={idx} className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs rounded-full px-3 py-1.5 font-medium shadow-lg hover:shadow-purple-500/30 transition-shadow">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex space-x-3 justify-center">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-400">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-400">
                  Live Demo
                </a>
              )}
            </div>
            
            </div>
            
            
            
            
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3  bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
        >
          {showAll ? (
            <>
              <span className="mr-2">Minimize</span>
              <span className="inline-block transform rotate-180 transition-transform">▼</span>
            </>
          ) : (
            <>
              <span className="mr-2">See More Projects</span>
              <span className="inline-block transition-transform">▼</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};  