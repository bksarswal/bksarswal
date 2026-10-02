import React from 'react'
import Works from '../Works'
import Resume from '../Resume'
import Skills from '../Skills'
import Contact from '../Contact'
import Footer from './Footer'
import Link from 'next/link'
import {
  DownloadOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import Image from 'next/image'

const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full overflow-hidden bg-[#050509] text-white"
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-indigo-600/20
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-600/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/3
            h-[250px]
            w-[450px]
            rounded-full
            bg-blue-600/5
            blur-[110px]
          "
        />

      </div>


      {/* ================= HERO ================= */}

      <section
        className="
          relative
          flex
          min-h-[calc(100vh-180px)]
          items-center
          px-6
          py-8
          sm:px-8
          lg:px-10
          lg:p-1.5
        "
      >

        <div className="container mx-auto">

          <div
            className="
              grid
              items-center
              gap-16
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12
            "
          >

            {/* ================================================= */}
            {/* LEFT - PROFILE IMAGE */}
            {/* ================================================= */}

            <div className="order-1 flex justify-center">

              <div
                className="
                  relative
                  h-[280px]
                  w-[280px]
                  sm:h-[340px]
                  sm:w-[340px]
                  lg:h-[390px]
                  lg:w-[390px]
                "
              >

                {/* ================= OUTER STATIC RING ================= */}

                <div
                  className="
                    absolute
                    inset-2
                    rounded-full
                    border
                    border-indigo-400/20
                    shadow-[0_0_70px_rgba(99,102,241,0.12)]
                  "
                />


                {/* ================= OUTER ORBIT PATH ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/[0.06]
                  "
                />


                {/* ================= SMOOTH ORBIT ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    animate-[spin_8s_linear_infinite]
                  "
                >

                  {/* Orbiting Dot */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-[-5px]
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      bg-indigo-400
                      shadow-[0_0_20px_rgba(129,140,248,1)]
                    "
                  />

                </div>


                {/* ================= INNER ORBIT ================= */}

                <div
                  className="
                    absolute
                    inset-[24px]
                    animate-[spin_12s_linear_infinite_reverse]
                  "
                >

                  <div
                    className="
                      absolute
                      left-1/2
                      top-[-3px]
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_15px_rgba(192,132,252,0.9)]
                    "
                  />

                </div>


                {/* ================= IMAGE GLOW ================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[230px]
                    w-[230px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-indigo-500/10
                    blur-[40px]
                    sm:h-[280px]
                    sm:w-[280px]
                    lg:h-[320px]
                    lg:w-[320px]
                  "
                />


                {/* ================= PROFILE IMAGE ================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[220px]
                    w-[220px]
                    -translate-x-1/2
                    -translate-y-1/2
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-br
                    from-indigo-500
                    via-purple-500
                    to-blue-500
                    p-[3px]
                    shadow-[0_0_60px_rgba(99,102,241,0.25)]
                    sm:h-[280px]
                    sm:w-[280px]
                    lg:h-[320px]
                    lg:w-[320px]
                  "
                >

                  <div
                    className="
                      h-full
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[#09090d]
                    "
                  >

                    <Image
                      src="/BK.jpg"
                      alt="Bholu Saini - Full Stack Developer"
                      width={1000}
                      height={1000}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                  </div>

                </div>


                {/* ================= SMALL FLOATING DOT ================= */}

                <span
                  className="
                    absolute
                    left-[15px]
                    top-[28%]
                    h-2
                    w-2
                    rounded-full
                    bg-purple-400
                    shadow-[0_0_15px_rgba(192,132,252,0.9)]
                    animate-pulse
                  "
                />


                <span
                  className="
                    absolute
                    bottom-[25%]
                    right-[10px]
                    h-2
                    w-2
                    rounded-full
                    bg-blue-400
                    shadow-[0_0_15px_rgba(96,165,250,0.9)]
                    animate-pulse
                  "
                />


                {/* ================= AVAILABLE BADGE ================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#111116]/90
                    px-3
                    py-2.5
                    shadow-xl
                    backdrop-blur-xl
                    sm:px-4
                    sm:py-3
                  "
                >

                  <div className="flex items-center gap-2.5 sm:gap-3">

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_12px_#34d399]
                        sm:h-2.5
                        sm:w-2.5
                      "
                    />

                    <div>

                      <p className="text-[11px] font-semibold text-white sm:text-xs">
                        Available
                      </p>

                      <p className="text-[9px] text-gray-500 sm:text-[10px]">
                        For opportunities
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT - INFORMATION */}
            {/* ================================================= */}

            <div className="order-2">

              {/* ================= NAME ================= */}

             

              {/* <h2
                className="
                  mt-1
                  text-2xl
                  font-bold
                  tracking-tight
                  sm:text-3xl
                "
              >
                Bholu Saini
              </h2> */}


              {/* ================= MAIN HEADING ================= */}

              <div
                className="
                 flex flex-col    
                  font-black
                  leading-[1.05]
                  tracking-tight
                  sm:text-5xl
                  lg:text-[52px]
                  xl:text-[56px]
                "
              >
              <span className="text-sm  text-gray-500 sm:text-base">
                Hello, I&apos;m 
              </span>
            
                <span
                  className="
                  text-2xl
                   text-white

                  "
                >
                 Bholu saini
                </span>

                

                <span className=" text-3xl
                     bg-gradient-to-r
                    from-indigo-400
                    via-purple-400
                    to-blue-400
                    bg-clip-text
                    text-transparent">
                  Full Stack Web Developer
                </span>

              </div>


               <div className='flex flex-col '>
                 {/* ================= DESCRIPTION ================= */}

              <p
                className="
                
                  max-w-xl
                  text-sm
                  leading-6
                  text-gray-400
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                "
              >
                I specialize in building scalable web applications
                from scratch using modern technologies like:
              </p>


              {/* ================= TECH STACK ================= */}

              <div className=" flex flex-wrap gap-1 sm:mt-5">

                {[
                  'React',
                  'Next.js',
                  'Node.js',
                   'Express.Js',
                  'MongoDB',
                  'AWS',
                  'Redis',
                  'Kafka',
                  'CI/CD',
                  "BullMQ",
                   "Git",
                   "Github",
                  "RazorPay"
                ].map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-gradient-to-r
                      from-sky-400
                      via-indigo-400
                      to-purple-400
                      px-2
                      py-1
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:border-indigo-400/40
                      hover:brightness-110
                      sm:px-3
                      sm:text-sm
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* ================= BUTTONS ================= */}

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">

                <Link
                  href="/bholusaini.pdf"
                  download="bholusaini.pdf"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gray-200
                    sm:px-6
                    sm:py-3
                  "
                >
                  Download CV

                  <DownloadOutlined />
                </Link>


                <Link
                  href="#works"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.03]
                    px-2
                    py-1
                    text-sm
                    font-semibold
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-400/50
                    hover:bg-indigo-500/10
                    sm:px-6
                    sm:py-3
                  "
                >
                  View Projects

                  <ArrowRightOutlined
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>


              {/* ================= STATS ================= */}

              <div
                className="
                  
                  flex
                  flex-wrap
                  gap-3
                  border-t
                  border-white/10
                  pt-2
                  sm:mt-7
                  sm:gap-7
                  sm:pt-5
                "
              >

                <div>

                  <p className="text-lg font-bold sm:text-xl">
                    3.5+  Years Experience
                    <span className=" text-[10px] text-gray-500 sm:text-[11px]">
                   
                  </span>
                  </p>

                  


                </div>


                <div className="h-9 w-px bg-white/10" />


                <div>

                  <p className="text-lg font-bold sm:text-xl">
                    MERN
                  </p>

                

                </div>


                <div className="h-9 w-px bg-white/10" />


                <div>

                  <p className="text-lg font-bold sm:text-xl">
                    AWS
                  </p>

                

                </div>

              </div>
               </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OTHER SECTIONS ================= */}

      <Works />

      <Skills />

      <Resume />

      <Contact />

      <Footer />

    </div>
  )
}

export default Home