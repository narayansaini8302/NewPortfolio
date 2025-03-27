import myphoto from './images/myphoto.jpg'
const Hero = () => {
    return (
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600">Narayan Mali</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
               Full Stack Developer 
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden shadow-xl">
             
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                 <img src={myphoto}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;