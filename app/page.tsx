import { FaCloud, FaMicrosoft } from "react-icons/fa";
export default function Home() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-10">
<nav className="flex justify-between items-center mb-16">
  <h2 className="text-2xl font-bold text-cyan-400">
    Julius
  </h2>

  <div className="space-x-6">
    <a href="#about" className="hover:text-cyan-400">About</a>
    <a href="#skills" className="hover:text-cyan-400">Skills</a>
    <a href="#contact" className="hover:text-cyan-400">Contact</a>
  </div>
</nav>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white">
          Julius <span className="text-cyan-400">Olukorede</span>
        </h1>

        <p className="text-xl text-gray-400 mt-4">
          Cloud & DevOps Engineer
        </p>

        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          Passionate about Cloud Computing, AWS, Microsoft Azure,
          Docker, Kubernetes, Terraform, Linux, Git and CI/CD.
          I enjoy building scalable cloud infrastructure and
          continuously improving my DevOps skills.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg">
            View Projects
          </button>

          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-gray-300 leading-8">
          I am Julius Olukorede, an aspiring Cloud and DevOps Engineer
          passionate about building scalable cloud infrastructure,
          automating deployments, and learning modern DevOps tools.
          I am currently studying AWS, Microsoft Azure, Docker,
          Kubernetes, Terraform, Linux, Git, GitHub and CI/CD while
          working on real-world projects.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">☁️ AWS</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🔷 Microsoft Azure</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🐧 Linux</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🐳 Docker</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">☸️ Kubernetes</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🌍 Terraform</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🌿 Git & GitHub</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🚀 CI/CD</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">💻 Bash Scripting</div>

          <div className="bg-gray-800 p-5 rounded-xl text-center hover:bg-cyan-600 transition">🌐 Networking</div>

        </div>
      </section>
{/* Projects */}
<section
  id="projects"
  className="py-20"
>
  <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
  <FaCloud className="text-cyan-400" />
  Cloud Portfolio Website
</h3>

      <p className="text-gray-300 mb-4">
        A responsive portfolio built with Next.js and Tailwind CSS to showcase my DevOps journey and technical skills.
      </p>

      <div className="flex gap-2 flex-wrap">
        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Next.js</span>
        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
      </div>
    </div>
    <div className="flex gap-3 mt-4">
  <a
    href="https://github.com/yourusername/my-cloud-portfolio"
    target="_blank"
    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
  >
    GitHub
  </a>

  <a
    href="#"
    target="_blank"
    className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400"
  >
    Live Demo
  </a>
</div>

    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
  <FaMicrosoft className="text-cyan-400" />
  Azure Virtual Machine Lab
</h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

      <p className="text-gray-300 mb-4">
        Created and managed Azure Virtual Machines while learning networking, storage, security and cloud administration.
      </p>

      <div className="flex gap-2 flex-wrap">
        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Azure</span>
        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Linux</span>
      </div>
    </div>

  </div>
</section>
      {/* Contact */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p>📧 Juliusolukorede@gmail.com</p>
        <p>📞 +2347078303914</p>
        <p>📞 +2348025250518</p>
        <p>📍 Ogun State, Nigeria</p>
      </section>
<footer className="text-center text-gray-400 mt-16 py-6 border-t border-gray-700">
  © 2026 Julius Olukorede | Cloud & DevOps Engineer
</footer>
    </main>
  );
}