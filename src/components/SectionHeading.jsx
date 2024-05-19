import React from "react";

function SectionHeading({ h1, p,animate=false }) {
  return (
    <section className={`${animate ? "animate" : null} text-center`}>
      <h3 className=" font-sans text-2xl sm:text-3xl md:4xl font-bold tracking-wider text-slate-600 dark:gradient-text">
        {h1}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 md:mt-1 text-sm md:text-lg">
        {p}
      </p>
    </section>
  );
}

export default SectionHeading;
