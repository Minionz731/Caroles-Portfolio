import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carole | Software Developer & Ethical Hacker</title>
        <meta
          name="description"
          content="Portfolio of Carole - Ethical Hacker, Developer & Climate Activist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white px-6 py-12 max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Minions 👋</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 leading-relaxed">
            Climate-Conscious Ethical Hacker, Software Developer & Media Personality.<br />
            Building tech solutions blending security, sustainability, and creativity.
          </p>
          <div className="flex justify-center space-x-8 text-blue-400">
            <a
              href="https://github.com/Minionz731"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/carole-moloi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mloyicz@gmail.com"
              className="hover:text-red-500 underline"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
            About Me
          </h2>
          <p className="leading-relaxed">
            I&apos;m passionate about ethical hacking, sustainable software development,
            and creating media content that empowers others. I thrive on solving complex
            problems and turning ideas into impactful digital solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Skills & Tech Stack
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside">
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Kotlin</li>
            <li>React Native</li>
            <li>Django</li>
            <li>Jekyll</li>
            <li>Bootstrap</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
            <li>Android Studio</li>
            <li>Ubuntu, Parrot OS, Kali Linux, Termux</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Featured Projects
          </h2>
          <ul className="space-y-6">
            <li>
              <a
                href="https://github.com/Minionz731/GreenPrint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline font-semibold"
              >
                GreenPrint – Carbon Footprint Tracker
              </a>
              <p>
                A sleek web app that calculates and visualizes your daily carbon footprint
                with actionable tips to reduce it. Built with Next.js, D3.js, and MongoDB.
              </p>
            </li>
            <li>
              <a
                href="https://github.com/Minionz731/CodeRed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline font-semibold"
              >
                Code Red – Ethical Hacking Playground
              </a>
              <p>
                Modular CTF platform for ethical hackers to practice vulnerabilities safely.
                Dockerized and designed for continuous learning.
              </p>
            </li>
            <li>
              <a
                href="https://github.com/Minionz731/VoiceBank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline font-semibold"
              >
                VoiceBank – Voice-Controlled Budgeting App
              </a>
              <p>
                Android app enabling hands-free expense tracking via voice commands,
                with accessibility and multi-language support.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Contact Me
          </h2>
          <p>
            Interested in collaborating, hiring, or just want to say hello?  
            Reach out via email or connect on LinkedIn.
          </p>
          <div className="mt-4 space-x-6 text-blue-400">
            <a
              href="mailto:mloyicz@gmail.com"
              className="underline hover:text-red-500"
            >
              mloyicz@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/carole-moloi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>
    </>
  );
}