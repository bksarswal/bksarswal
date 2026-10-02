"use client";

import Image from "next/image";

const Works = () => {
 
  return (
  
<section
  id="works"
  className="relative scroll-mt-16 overflow-hidden px-4 py-20 sm:px-6 sm:py-12 lg:px-8"
>
  {/* Background Glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
  >
    <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
    <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="w-full  flex justify-center items-center">

        <div className="mb-12 max-w-2xl ">
          <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-5xl">
            Projects i&apos;ve {" "}

            <span
              className="text-violet-400"
              style={{
                textShadow: "0 0 30px rgba(167,139,250,.45)",
              }}
            >
              shipped
            </span>
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block h-px w-32 bg-gradient-to-r from-violet-400 to-transparent"
          />

          <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
            Real products built around scalable architecture,
            clean interfaces and practical problem solving.
          </p>
        </div>
    </div>
    

    {/* Projects Grid */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Featured CRM */}
      <div className="md:col-span-2 lg:col-span-3">
        <div style={{ opacity: 1, transform: "none" }}>
          <article className="group relative grid h-full gap-6 overflow-hidden rounded-2xl border border-violet-400/15 bg-[#0b0614]/60 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_50px_-16px_rgba(167,139,250,.55)] sm:p-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:p-6">

            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-full origin-left scale-x-[0.15] bg-gradient-to-r from-violet-400 via-purple-300 to-transparent transition-transform duration-700 group-hover:scale-x-100"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Preview */}
            <div className="overflow-hidden rounded-xl border border-violet-400/15 bg-[#08050d] shadow-[0_0_40px_-16px_rgba(167,139,250,.5)]">
              <div className="flex items-center gap-3 border-b border-violet-400/10 bg-black/40 px-3 py-2">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-violet-400/70" />
                  <span className="h-2 w-2 rounded-full bg-violet-400/40" />
                  <span className="h-2 w-2 rounded-full bg-violet-400/20" />
                </div>

                <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-[11px] text-slate-400">
                  crm.techsunset.com
                </div>
              </div>

              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[22rem]">
                <Image
                  alt="crm-techsunset.com website preview"
                  loading="lazy"
                  width="1200"
                  height="1600"
                  decoding="async"
                  className="absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top opacity-80 transition-all duration-[10000ms] ease-linear group-hover:-translate-y-[85%] group-hover:opacity-100"
                  src="/projects/crm.png"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"
                />

                <span className="absolute bottom-3 left-3 rounded-full border border-violet-400/20 bg-black/60 px-3 py-1 text-[11px] text-violet-200 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                  Hover to scroll preview
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-violet-300">
                  Featured
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Live
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300 sm:text-3xl">
                crm-techsunset.com
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
                CRM (Customer Relationship Management) is a software used to
                manage customers, leads, sales, and customer interactions in
                one place.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "Node.js", "MongoDB", "Redis"].map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-violet-400/15 bg-violet-400/[0.05] px-2.5 py-1 text-xs text-violet-100/90"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href="https://crm.techsunset.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2 text-sm font-semibold text-violet-950 shadow-[0_0_24px_-6px_rgba(167,139,250,.8)] transition hover:bg-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  Live demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* HRMS */}
      <div style={{ opacity: 1, transform: "none" }}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-400/15 bg-[#0b0614]/60 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_50px_-16px_rgba(167,139,250,.55)] sm:p-5">

          <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-[0.15] bg-gradient-to-r from-violet-400 via-purple-300 to-transparent transition-transform duration-700 group-hover:scale-x-100" />

          <span className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="overflow-hidden rounded-xl border border-violet-400/15 bg-[#08050d] shadow-[0_0_40px_-16px_rgba(167,139,250,.5)]">
            <div className="flex items-center gap-3 border-b border-violet-400/10 bg-black/40 px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-violet-400/70" />
                <span className="h-2 w-2 rounded-full bg-violet-400/40" />
                <span className="h-2 w-2 rounded-full bg-violet-400/20" />
              </div>

              <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-[11px] text-slate-400">
                hr.techsunset.com
              </div>
            </div>

            <div className="relative h-52 overflow-hidden sm:h-56">
              <Image
               width={1000}
               height={1000}
                src="/projects/hr.png"
                alt="HRMS website preview"
                className="absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top opacity-80 transition-all duration-[10000ms] ease-linear group-hover:-translate-y-[85%] group-hover:opacity-100"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full border border-violet-400/20 bg-black/60 px-3 py-1 text-[11px] text-violet-200 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                Hover to scroll preview
              </span>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col px-1 pb-1 pt-5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/20 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Live
            </span>

            <h3 className="mt-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
              HRMS
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
              TechSunset HR is an Human Resource management software used to
              manage employees, attendance, leaves, onboarding, departments,
              holidays, and HR reports in one place.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "Node.js", "MongoDB", "Redis"].map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-violet-400/15 bg-violet-400/[0.05] px-2.5 py-1 text-xs text-violet-100/90"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href="https://hr.techsunset.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2 text-sm font-semibold text-violet-950 shadow-[0_0_24px_-6px_rgba(167,139,250,.8)] transition hover:bg-violet-300"
              >
                Live demo
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Inventory */}
      <div style={{ opacity: 1, transform: "none" }}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-400/15 bg-[#0b0614]/60 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_50px_-16px_rgba(167,139,250,.55)] sm:p-5">

          <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-[0.15] bg-gradient-to-r from-violet-400 via-purple-300 to-transparent transition-transform duration-700 group-hover:scale-x-100" />

          <span className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="overflow-hidden rounded-xl border border-violet-400/15 bg-[#08050d] shadow-[0_0_40px_-16px_rgba(167,139,250,.5)]">
            <div className="flex items-center gap-3 border-b border-violet-400/10 bg-black/40 px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-violet-400/70" />
                <span className="h-2 w-2 rounded-full bg-violet-400/40" />
                <span className="h-2 w-2 rounded-full bg-violet-400/20" />
              </div>

              <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-[11px] text-slate-400">
                inventory.techsunset.com
              </div>
            </div>

            <div className="relative h-52 overflow-hidden sm:h-56">
              <Image
                 width={1000}
                 height={1000}
                src="/projects/invent.png"
                alt="Inventory management website preview"
                className="absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top opacity-80 transition-all duration-[10000ms] ease-linear group-hover:-translate-y-[85%] group-hover:opacity-100"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full border border-violet-400/20 bg-black/60 px-3 py-1 text-[11px] text-violet-200 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                Hover to scroll preview
              </span>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col px-1 pb-1 pt-5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/20 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Live
            </span>

            <h3 className="mt-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
              Inventory management
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
              TechSunset Inventory is inventory management software used to
              manage products, stock, orders, suppliers, warehouses, and
              fulfillment in one place.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-violet-400/15 bg-violet-400/[0.05] px-2.5 py-1 text-xs text-violet-100/90"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href="https://inventory.techsunset.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2 text-sm font-semibold text-violet-950 shadow-[0_0_24px_-6px_rgba(167,139,250,.8)] transition hover:bg-violet-300"
              >
                Live demo
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Project Management */}
      <div style={{ opacity: 1, transform: "none" }}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-400/15 bg-[#0b0614]/60 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_50px_-16px_rgba(167,139,250,.55)] sm:p-5">

          <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-[0.15] bg-gradient-to-r from-violet-400 via-purple-300 to-transparent transition-transform duration-700 group-hover:scale-x-100" />

          <span className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="overflow-hidden rounded-xl border border-violet-400/15 bg-[#08050d] shadow-[0_0_40px_-16px_rgba(167,139,250,.5)]">
            <div className="flex items-center gap-3 border-b border-violet-400/10 bg-black/40 px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-violet-400/70" />
                <span className="h-2 w-2 rounded-full bg-violet-400/40" />
                <span className="h-2 w-2 rounded-full bg-violet-400/20" />
              </div>

              <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-[11px] text-slate-400">
                project.techsunset.com
              </div>
            </div>

            <div className="relative h-52 overflow-hidden sm:h-56">
              <Image
                width={1000}
                height={1000}
                src="/projects/task.png"
                alt="Project management website preview"
                className="absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top opacity-80 transition-all duration-[10000ms] ease-linear group-hover:-translate-y-[85%] group-hover:opacity-100"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full border border-violet-400/20 bg-black/60 px-3 py-1 text-[11px] text-violet-200 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                Hover to scroll preview
              </span>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col px-1 pb-1 pt-5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/20 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Live
            </span>

            <h3 className="mt-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
              Project management
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
              TechSunset Project is project and task management software used
              to manage projects, tasks, deadlines, milestones, team workload,
              and progress in one place.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-violet-400/15 bg-violet-400/[0.05] px-2.5 py-1 text-xs text-violet-100/90"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href="https://project.techsunset.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2 text-sm font-semibold text-violet-950 shadow-[0_0_24px_-6px_rgba(167,139,250,.8)] transition hover:bg-violet-300"
              >
                Live demo
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>
  </div>
</section>

  );
};

export default Works;