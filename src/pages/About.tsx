import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import ExperienceList from "../components/Experience";

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

      <AnimateSharedLayout>
        <ExperienceList />
      </AnimateSharedLayout>

      <div className="mt-20 flex">
        <div>
          <h2 className="text-4xl py-6">4+ years of experience</h2>
        </div>
        <div className="w-4/5 flex flex-wrap">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-violet-900 shadow-violet-400 m-2 text-white w-fit rounded-full cursor-pointer shadow-md hover:shadow-lg py-1 px-3"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
