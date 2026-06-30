const services = [
  { title: "Web Development", desc: "Scalable web apps with Next.js, React, and modern frameworks built for performance." },
  { title: "Mobile Apps", desc: "Cross-platform mobile solutions using React Native — one codebase, every device." },
  { title: "AI & Automation", desc: "Intelligent automation, chatbots, and AI-powered tools to transform your workflow." },
  { title: "Cloud & DevOps", desc: "Infrastructure at scale — AWS, Vercel, Docker, CI/CD pipelines that never sleep." },
  { title: "UI/UX Design", desc: "Human-centered design that looks stunning and feels effortless." },
  { title: "Consulting", desc: "Architecture reviews, tech strategy, and team augmentation from senior engineers." },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">Zynex<span className="text-zynex-500">Global</span></span>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zynex-500/10 via-transparent to-zinc-950" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-zynex-500/30 bg-zynex-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-zynex-300 uppercase">
            Now in development
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Building the Future of Digital Products
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Zynex Global crafts high-performance web, mobile, and AI-powered solutions
            for businesses that refuse to settle for ordinary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-zynex-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-zynex-600/25 transition-all hover:bg-zynex-500 hover:shadow-zynex-500/40 active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white active:scale-95"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs font-semibold tracking-widest text-zynex-400 uppercase">About</div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who We Are
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <p className="text-lg leading-relaxed text-zinc-400">
              Zynex Global is a next-gen digital agency built for the modern web. We combine
              deep engineering expertise with a product-minded approach to deliver solutions
              that users love and businesses rely on.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Tech Stack", value: "15+" },
                { label: "Avg. NPS", value: "92" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-5">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs font-semibold tracking-widest text-zynex-400 uppercase">Services</div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What We Build
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6 transition-all hover:border-zynex-500/40 hover:bg-zinc-900/60"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs font-semibold tracking-widest text-zynex-400 uppercase">Contact</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mb-10 max-w-xl text-lg text-zinc-400">
            Have a project in mind? Reach out and we&apos;ll build something great.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:hello@zynexglobal.com"
              className="rounded-full bg-zynex-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-zynex-600/25 transition-all hover:bg-zynex-500 hover:shadow-zynex-500/40 active:scale-95"
            >
              hello@zynexglobal.com
            </a>
            <span className="flex items-center text-sm text-zinc-500">
              Site launching soon
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 sm:flex-row sm:text-left">
          <span>&copy; {new Date().getFullYear()} Zynex Global. All rights reserved.</span>
          <span className="text-zinc-700">Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
