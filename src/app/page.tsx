import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carole | Software Developer & Ethical Hacker',
  description: 'Portfolio of Carole - Ethical Hacker, Developer & Climate Activist',
}

export default function Home() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "Kotlin", "React Native", "Django",
    "Jekyll", "Bootstrap", "HTML & CSS", "Git & GitHub", "Android Studio",
    "Ubuntu", "Parrot OS", "Kali Linux", "Termux"
  ];

  const projects = [
    {
      title: "GreenPrint – Carbon Footprint Tracker",
      desc: "A sleek web app that calculates and visualizes your daily carbon footprint with actionable tips to reduce it. Built with Next.js, D3.js, and MongoDB.",
      href: "https://github.com/Minionz731/GreenPrint"
    },
    {
      title: "Code Red – Ethical Hacking Playground", 
      desc: "Modular CTF platform for ethical hackers to practice vulnerabilities safely. Dockerized and designed for continuous learning.",
      href: "https://github.com/Minionz731/CodeRed"
    },
    {
      title: "VoiceBank – Voice-Controlled Budgeting App",
      desc: "Android app enabling hands-free expense tracking via voice commands, with accessibility and multi-language support.",
      href: "https://github.com/Minionz731/VoiceBank"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/10 to-teal-400/10 blur-3xl animate-bounce"></div>
      </div>

      <main className="relative px-6 py-12 max-w-6xl mx-auto">
        <section className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hi, I am Carole 👋
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-300">
            <span className="text-green-400 font-semibold">Climate-Conscious</span> Ethical Hacker, 
            <span className="text-purple-400 font-semibold"> Software Developer</span> and 
            <span className="text-yellow-400 font-semibold"> Media Personality</span>.<br />
            Building tech solutions blending security, sustainability, and creativity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Minionz731"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold hover:scale-110 transition-transform duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/carole-moloi/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold hover:scale-110 transition-transform duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mloyicz@gmail.com"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold hover:scale-110 transition-transform duration-300"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-lg leading-relaxed text-gray-300">
              I am passionate about ethical hacking, sustainable software development,
              and creating media content that empowers others. I thrive on solving complex
              problems and turning ideas into impactful digital solutions.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-green-400">
            Skills & Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:border-purple-400/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-2xl font-bold mb-4 text-cyan-400 hover:text-purple-400 hover:underline transition-colors duration-300"
                >
                  {project.title}
                </a>
                <p className="text-gray-300 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-pink-400">
            Contact Me
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <p className="text-xl text-gray-300 mb-8">
              Interested in collaborating, hiring, or just want to say hello?<br />
              Reach out via email or connect on LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:mloyicz@gmail.com"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold hover:scale-110 transition-transform duration-300"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/carole-moloi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold hover:scale-110 transition-transform duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        <div className="fixed top-20 right-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="fixed bottom-20 left-10 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
        <div className="fixed top-1/2 left-5 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
      </main>
    </div>
  );
}
