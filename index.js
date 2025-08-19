import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carole | Fullstack Software Developer & Ethical Hacker</title>
        <meta name="description" content="Portfolio of Carole - Ethical Hacker, Developer & Climate Activist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Carole 👋</h1>
        <p className="text-xl max-w-xl text-center mb-6">
          Climate-Conscious Ethical Hacker, Software Developer & Media Personality.<br />
          Building tech solutions blending security, sustainability, and creativity.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/Minionz731" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/carole-moloi/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
            LinkedIn
          </a>
          <a href="mailto:mloyicz@gmail.com" className="underline hover:text-red-500">
            Contact
          </a>
        </div>
      </main>
    </>
  )
}
