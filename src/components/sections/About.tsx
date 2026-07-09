"use client";

import Reveal from "@/components/ui/Reveal";
import { Clock, ShieldCheck, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Business Support",
    desc: "Dedicated account management available round the clock.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transportation",
    desc: "Food-grade packaging and secure global shipping.",
  },
  {
    icon: Globe,
    title: "Worldwide Network",
    desc: "Trusted export network spanning 30+ countries.",
  },
  {
    icon: Zap,
    title: "Quick Resolution",
    desc: "Fast and easy quality problem analysis and resolution.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Modern And Trusted Food Export Company
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Zynex Global is a leading B2B exporter of premium dehydrated
              products. We bridge the gap between India&apos;s finest
              agricultural produce and international buyers who demand
              uncompromising quality, safety, and reliability.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div className="rounded-xl border border-gray-100 p-6 transition-colors hover:border-gray-200">
                  <feature.icon size={24} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
