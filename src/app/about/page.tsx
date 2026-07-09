import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Database,
  Target,
  TrendingUp,
  BarChart3,
  Share2,
  ClipboardList,
  Link2,
  FileBarChart,
  Megaphone,
  Quote,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zynex Global — a leading B2B exporter of premium dehydrated fruits, vegetables, and food ingredients.",
};

const processSteps = [
  { icon: Search, title: "Search Strategy", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: Database, title: "Data Collection", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: Target, title: "Targeting", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: TrendingUp, title: "Result", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
];

const services = [
  { icon: Search, title: "Search Strategy", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: Share2, title: "Social Marketing", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: ClipboardList, title: "Business Planning", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: Link2, title: "Link Building", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: FileBarChart, title: "Report Analysis", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
  { icon: Megaphone, title: "CPA Marketing", desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing." },
];

const aboutFaqs = [
  {
    question: "What harsh truths do you prefer to ignore?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Pellentesque adipiscing. Vivamus vel nisi eget eros eleifend pulvinar in ut dui. Donec scelerisque, odio a luctus lacinia, est est rhoncus velit, non viverra diam lacus eget metus.",
  },
];

const aboutTestimonials = [
  { quote: "Excellent service and outstanding results. Highly recommended for anyone looking for professional marketing expertise.", name: "tushar chowdhury", title: "Marketing Director" },
  { quote: "Working with this team has been a game-changer for our business. Their strategic approach delivered real, measurable results.", name: "Courtney Cook", title: "Business Owner" },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            GET STARTED
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            about me
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            25 years of experience
          </p>
        </div>
      </section>

      {/* My Work Process */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              my Work Process
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <step.icon size={24} className="text-accent" strokeWidth={1.5} />
                  <span className="text-sm font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What services I provide you */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              My Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What services I provide you
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-md"
              >
                <service.icon size={28} className="text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {aboutFaqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Feedback */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clients Feedback
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {aboutTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <Quote size={32} className="text-accent/30" strokeWidth={1.5} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Blog
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Read my Latest blog post
          </h2>
          <p className="mt-8 text-lg text-gray-400">
            No posts found!
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            sing up to newsletter
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-gray-400">
            receice latest news, updates, and many other things every week.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
