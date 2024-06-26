import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    // redux,
    tailwind,
    bootstrap,
    // sass,
    vscode,
    git,
    github,
    npm,
    // postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-1 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-6">
        <img src={html} title="html" alt="HTML" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={css} title="CSS" alt="CSS" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={js} title="JavaScript" alt="JavaScript" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={react} title="React" alt="React" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        {/* <img src={redux} title="Redux" alt="Redux" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> */}
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        {/* <img src={sass} title="SASS" alt="SASS" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> */}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={git} title="Git" alt="Git" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={github} title="Github" alt="Github" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={figma} title="Figma" alt="Figma" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        <img src={npm} title="NPM" alt="NPM" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        {/* <img src={postman} title="Postman" alt="Postman" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> */}
      </section>
    </main>
  );
}

export default Technologies;
