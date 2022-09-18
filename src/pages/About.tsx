import React from "react";

const About = () => {
  return (
    <div className="max-w-full">
      <p className="my-6 md:text-4xl lg:text-base">
        I&lsquo;m a Software engineer with over 4 years of experience. Living in
        Makassar - Indonesia. I started my career as Angular dev and now my
        day-to-day job is working with React as my main tech stack. I love to
        write CSS. I&lsquo;m comfortable working with Typescript, Node JS, GIT,
        and CI/CD. I have basic knowledge about AWS stack. I am passionate about
        teaching others about Web Development. I build my own Web Dev community
        with over 2000 junior devs.
      </p>
      <p className="md:text-4xl lg:text-base">
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
    </div>
  );
};

export default About;
