"use client";

import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const skillCategories = [
  {
    title: "Frontend Engineering",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    glow: "hover:shadow-[0_25px_80px_rgba(99,102,241,0.20)]",
    skills: [
      { name: "React.js", image: "/images/react.png" },
      { name: "Next.js", image: "/images/nextjs.jpeg" },
      { name: "Tailwind CSS", image: "/images/tailwind.png" },
      { name: "Ant Design", image: "/images/antd.jpeg" },
      { name: "ShadCN", image: "/images/shadcn.png" },
    ],
  },
  {
    title: "Backend Engineering",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    glow: "hover:shadow-[0_25px_80px_rgba(20,184,166,0.18)]",
    skills: [
      { name: "Node.js", image: "/images/node.png" },
      { name: "Express.js", image: "/images/express.jpeg" },
      { name: "MongoDB", image: "/images/mongodb.jpeg" },
      { name: "Microservices", image: "/images/microservicess.png" },
      { name: "REST APIs", image: "/images/restapi.jpg" },
    ],
  },
  {
    title: "DevOps & Cloud",
    gradient: "from-orange-400 via-pink-500 to-purple-500",
    glow: "hover:shadow-[0_25px_80px_rgba(236,72,153,0.18)]",
    skills: [
      { name: "Git / GitHub", image: "/images/github.jpeg" },
      { name: "Docker", image: "/images/docker.png" },
      { name: "AWS", image: "/images/aws.png" },
      { name: "CI/CD", image: "/images/cicd.png" },
      { name: "Vercel", image: "/images/vercel.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#050509]
        px-5
        py-28
        text-white
        sm:px-8
        lg:px-10
      "
    >
      {/* =========================================
          BACKGROUND ATMOSPHERE
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[5%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-600/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[40%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[300px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/[0.04]
            blur-[140px]
          "
        />
      </div>

      {/* =========================================
          HEADER
      ========================================== */}

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
            border-white/[0.08]
            bg-white/[0.025]
            px-4
            py-2
            shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-indigo-400
              shadow-[0_0_14px_rgba(129,140,248,1)]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-gray-400
            "
          >
            TECHNICAL EXPERTISE
          </span>
        </div>

        {/* Heading */}

        <Title
          level={2}
          className="
            !m-0
            !text-4xl
            !font-black
            !tracking-[-0.03em]
            sm:!text-5xl
            lg:!text-6xl
          "
        >
          <span
            className="
              bg-gradient-to-r
              from-white
              via-indigo-200
              to-purple-400
              bg-clip-text
              text-transparent
            "
          >
            Skills & Expertise
          </span>
        </Title>

        {/* Description */}

        <Paragraph
          className="
            !mx-auto
            !mt-6
            !max-w-2xl
            !text-sm
            !leading-7
            !text-gray-500
            sm:!text-base
          "
        >
          A practical technology stack focused on building scalable,
          maintainable and production-ready digital products.
        </Paragraph>
      </div>

      {/* =========================================
          CATEGORIES
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          mt-20
          max-w-7xl
          space-y-16
        "
      >
        {skillCategories.map((category) => (
          <div key={category.title}>

            {/* Category Header */}

            <div className="mb-8 flex items-center gap-5">

              <h3
                className="
                  whitespace-nowrap
                  text-base
                  font-bold
                  tracking-wide
                  text-gray-200
                  sm:text-lg
                "
              >
                {category.title}
              </h3>

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-white/[0.12]
                  via-white/[0.04]
                  to-transparent
                "
              />

            </div>

            {/* Cards */}

            <div
              className="
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-3
                lg:grid-cols-5
              "
            >
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    p-[1px]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-white/[0.14]
                    ${category.glow}
                  `}
                >

                  {/* =================================
                      4PX TOP GRADIENT
                  ================================= */}

                  <div
                    className={`
                      absolute
                      left-0
                      right-0
                      top-0
                      z-20
                      h-[4px]
                      bg-gradient-to-r
                      ${category.gradient}
                    `}
                  />

                  {/* Moving Highlight */}

                  <div
                    className={`
                      absolute
                      -left-1/2
                      top-0
                      z-30
                      h-[4px]
                      w-1/3
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      opacity-0
                      blur-[1px]
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                      group-hover:opacity-100
                    `}
                  />

                  {/* Card */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[175px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[19px]
                      bg-[#0a0a10]
                      px-4
                      py-8
                    "
                  >

                    {/* Inner Radial Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-32
                        w-32
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-indigo-500/[0.08]
                        blur-[45px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Logo Box */}

                    <div
                      className="
                        relative
                        flex
                        h-[68px]
                        w-[68px]
                        items-center
                        justify-center
                        rounded-[18px]
                        border
                        border-white/[0.09]
                        bg-white/[0.035]
                        p-3.5
                        shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-white/[0.16]
                        group-hover:bg-white/[0.055]
                        group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.45)]
                      "
                    >

                      {/* Logo Inner Glow */}

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-[18px]
                          bg-gradient-to-br
                          from-white/[0.06]
                          to-transparent
                        "
                      />

                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="
                          relative
                          z-10
                          h-full
                          w-full
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* Name */}

                    <h4
                      className="
                        relative
                        z-10
                        mt-6
                        text-center
                        text-sm
                        font-semibold
                        tracking-wide
                        text-gray-400
                        transition-all
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {skill.name}
                    </h4>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          BOTTOM SUMMARY
      ========================================== */}

      <div className="relative mx-auto mt-20 max-w-5xl">

        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-7
            shadow-[0_20px_70px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            sm:p-9
          "
        >

          {/* Top Accent */}

          <div
            className="
              absolute
              left-[20%]
              right-[20%]
              top-0
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-indigo-400
              to-transparent
              opacity-70
            "
          />

          <div className="grid gap-8 sm:grid-cols-3">

            {/* Experience */}

            <div className="text-center sm:border-r sm:border-white/[0.08]">

              <p
                className="
                  bg-gradient-to-r
                  from-white
                  to-indigo-300
                  bg-clip-text
                  text-3xl
                  font-black
                  text-transparent
                "
              >
                3.5+
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                Years Experience
              </p>

            </div>

            {/* Full Stack */}

            <div className="text-center sm:border-r sm:border-white/[0.08]">

              <p
                className="
                  bg-gradient-to-r
                  from-indigo-300
                  to-purple-400
                  bg-clip-text
                  text-3xl
                  font-black
                  text-transparent
                "
              >
                MERN
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                Full Stack Development
              </p>

            </div>

            {/* Cloud */}

            <div className="text-center">

              <p
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-3xl
                  font-black
                  text-transparent
                "
              >
                AWS
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                Cloud & Deployment
              </p>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;