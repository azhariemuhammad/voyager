import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import ExperienceList from "../components/Experience";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  const skills = [
    "React",
    "CSS",
    "JS",
    "Typescript",
    "Angular",
    "Framer",
    "CI/CD",
    "Tailwind",
    "Webpack",
    "Vite",
  ];
  return (
    <div className="max-w-full">
      <p className="my-6 sm:text-4xl lg:text-base">
        I&lsquo;m a Software engineer with over 4 years of experience. Living in
        Makassar - Indonesia. I started my career as Angular dev and now my
        day-to-day job is working with React as my main tech stack. I love to
        write CSS. I&lsquo;m comfortable working with Typescript, Node JS, GIT,
        and CI/CD. I have basic knowledge about AWS stack. I am passionate about
        teaching others about Web Development. I build my own Web Dev community
        with over 2000 junior devs.
      </p>
      <p className="sm:text-4xl lg:text-base">
        You can follow me on{" "}
        <a href="https://twitter.com/azharieazharou" className="text-amber-500">
          Twitter
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.linkedin.com/in/azharie-muhammad/"
          className="text-amber-500"
        >
          LinkedIn
        </a>
      </p>

      <div className="mt-20 flex flex-col">
        <div>
          <h2 className="text-xl lg:text-4xl py-6">
            I've spent most of my development life in Frontend things!
          </h2>
        </div>
        <motion.div
          className="flex flex-wrap"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className=" bg-violet-900 w-fit text-xs lg:text-base shadow-violet-400 m-1 text-white w-fit rounded-full cursor-pointer shadow-md hover:shadow-lg  py-2 px-4"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
