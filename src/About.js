import myphoto from './images/myphoto.jpg'
const About = () => {
    return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-white"><img className='scale-x-[-1]' src={myphoto}></img></span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate frontend developer with 5 years of experience building responsive and 
                user-friendly web applications. I specialize in React, JavaScript, and modern CSS 
                frameworks like Tailwind CSS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Name:</h4>
                  <p className="text-gray-600 dark:text-gray-400">Narayan Mali</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Email:</h4>
                  <p className="text-gray-600 dark:text-gray-400">narayansaini8302@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">From:</h4>
                  <p className="text-gray-600 dark:text-gray-400">India(Rajasthan)</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Experience:</h4>
                  <p className="text-gray-600 dark:text-gray-400">Intern</p>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;