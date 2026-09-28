"use client";

import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const items: PortfolioItem[] = [
  {
    title: "Amoeba Productions",
    description:
      "Event management and media production platform for weddings, corporate events, marketing and brand promotions.",
    image: "/project/amoeba.png",
    category: "ecom",
    link: "https://www.amoebaproductions.in",
  },
  {
    title: "Ferns N Petals (FNP)",
    description:
      "Large-scale gifting and floral platform covering flowers, cakes, personalized gifts and corporate gifting.",
    image: "/project/fnb.png",
    category: "branding",
    link: "https://www.fnp.com",
  },
  {
    title: "PayRentz",
    description:
      "Rental platform for furniture, appliances, fitness equipment and laptops with flexible monthly plans.",
    image: "/project/payrentz.png",
    category: "ecom",
    link: "https://www.payrentz.com",
  },
  {
    title: "SOS Party",
    description:
      "Event management platform delivering corporate, team-building, hybrid, offsite and MICE experiences.",
    image: "/project/sosParty.png",
    category: "branding",
    link: "https://sosparty.io",
  },
  {
    title: "Furlenco",
    description:
      "Furniture and home appliance rental platform with subscription, upgrade, swap and purchase options.",
    image: "/project/furlenco.png",
    category: "branding",
    link: "https://www.furlenco.com",
  },
  {
    title: "Livspace",
    description:
      "Technology-driven interior design platform for home design, modular interiors and renovation solutions.",
    image: "/project/livspace.png",
    category: "branding",
    link: "https://www.livspace.com",
  },
];

const categories = ["all", "ecom", "branding"];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="works"
      className="
        relative
        overflow-hidden
        bg-[#07060A]
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-10
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft Violet Left Glow */}

        <div
          className="
            absolute
            left-[8%]
            top-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#9B8AFB]/[0.055]
            blur-[140px]
          "
        />

        {/* Deep Violet Right Glow */}

        <div
          className="
            absolute
            bottom-[5%]
            right-[8%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#6D5ACF]/[0.07]
            blur-[140px]
          "
        />
      </div>

      {/* ================= HEADER ================= */}

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Label */}

        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-2.5
            rounded-full
            border
            border-[#9B8AFB]/15
            bg-[#9B8AFB]/[0.035]
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#9B8AFB]
              shadow-[0_0_12px_rgba(155,138,251,0.85)]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C4B5FD]/75
            "
          >
            Selected Work
          </span>
        </div>

        {/* Main Heading */}

        <h2
          className="
            m-0
            text-4xl
            font-extrabold
            leading-[1.05]
            tracking-[-0.035em]
            text-white
            sm:text-5xl
            lg:text-[58px]
          "
        >
          <span className="text-white">Recent </span>

          <span
            className="
              bg-gradient-to-r
              from-[#C4B5FD]
              via-[#9B8AFB]
              to-[#6D5ACF]
              bg-clip-text
              text-transparent
            "
          >
            Works
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-5
            max-w-[620px]
            text-[13px]
            font-normal
            leading-6
            tracking-[0.01em]
            text-white/40
            sm:text-sm
            sm:leading-7
          "
        >
          Selected digital products and web applications built with
          modern technologies and production-focused engineering.
        </p>
      </div>

      {/* ================= FILTERS ================= */}

      <div
        className="
          relative
          mt-10
          flex
          flex-wrap
          justify-center
          gap-2
        "
      >
        {categories.map((cat) => {
          const active = activeFilter === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                rounded-full
                border
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300

                ${
                  active
                    ? `
                      border-[#9B8AFB]/30
                      bg-[#9B8AFB]/10
                      text-[#C4B5FD]
                      shadow-[0_0_22px_rgba(155,138,251,0.10)]
                    `
                    : `
                      border-white/[0.07]
                      bg-white/[0.018]
                      text-white/35
                      hover:border-[#9B8AFB]/20
                      hover:bg-[#9B8AFB]/[0.04]
                      hover:text-white/70
                    `
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ================= PROJECT GRID ================= */}

      <div
        className="
          relative
          mx-auto
          mt-12
          grid
          max-w-6xl
          grid-cols-1
          gap-6
          md:grid-cols-2
        "
      >
        {filteredItems.map((item) => (
          <article
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-[20px]
              border
              border-white/[0.07]
              bg-[#0B090F]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#9B8AFB]/20
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
            "
          >
            {/* ================= IMAGE ================= */}

            <div
              className="
                relative
                h-[220px]
                overflow-hidden
                sm:h-[245px]
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.045]
                "
              />

              {/* Dark Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#08070C]
                  via-transparent
                  to-transparent
                  opacity-80
                "
              />

              {/* Soft Violet Hover */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#9B8AFB]/[0.08]
                  via-transparent
                  to-[#6D5ACF]/[0.10]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Category */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-black/35
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/60
                  backdrop-blur-xl
                "
              >
                {item.category === "ecom"
                  ? "E-Commerce"
                  : "Branding"}
              </div>

              {/* Visit Button */}

              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title}`}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-black/35
                  text-xs
                  text-white/55
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-[#9B8AFB]/40
                  hover:bg-[#9B8AFB]/10
                  hover:text-[#C4B5FD]
                "
              >
                <ArrowUpOutlined />
              </Link>
            </div>

            {/* ================= CONTENT ================= */}

            <div
              className="
                px-5
                pb-5
                pt-5
                sm:px-6
                sm:pb-6
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  {/* Project Title */}

                  <h3
                    className="
                      truncate
                      text-[18px]
                      font-semibold
                      leading-6
                      tracking-[-0.015em]
                      text-white/90
                      transition-colors
                      duration-300
                      group-hover:text-[#C4B5FD]
                      sm:text-[19px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2.5
                      line-clamp-2
                      max-w-xl
                      text-[13px]
                      font-normal
                      leading-[1.65]
                      tracking-[0.005em]
                      text-white/38
                      sm:text-[13.5px]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title}`}
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-[11px]
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:border-[#9B8AFB]/30
                    group-hover:bg-[#9B8AFB]/10
                    group-hover:text-[#C4B5FD]
                  "
                >
                  <ArrowUpOutlined />
                </Link>
              </div>

              {/* ================= META ================= */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.055]
                  pt-4
                "
              >
                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/25
                  "
                >
                  Web Application
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#9B8AFB]/70
                    shadow-[0_0_8px_rgba(155,138,251,0.7)]
                  "
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ================= FOOTER COUNT ================= */}

      <div
        className="
          relative
          mx-auto
          mt-12
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <span
          className="
            h-px
            w-10
            bg-gradient-to-r
            from-transparent
            to-white/[0.08]
          "
        />

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.20em]
            text-white/25
          "
        >
          {filteredItems.length} Projects
        </span>

        <span
          className="
            h-px
            w-10
            bg-gradient-to-l
            from-transparent
            to-white/[0.08]
          "
        />
      </div>
    </section>
  );
};

export default Works;