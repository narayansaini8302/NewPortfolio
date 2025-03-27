import e from './images/ecomerce.jpg'
import p from './images/port.png'
import t from './images/task.png'
const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image:e,
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Material UI"],
      image: t,
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image:p,
      link: "#"
    }
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each one was built to solve specific problems and deliver exceptional user experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;