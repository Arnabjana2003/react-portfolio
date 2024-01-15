import React from "react";

function SectionHeading({ h1, p,animate=false }) {
  return (
    <section className={`${animate ? "animate" : null} text-center`}>
      <h3 className=" font-sans text-2xl sm:text-3xl md:4xl font-bold first-letter:text-slate-900 text-slate-800">
        {h1}
      </h3>
      <p className="text-slate-500 md:mt-1 text-sm md:text-lg">
        {p}
      </p>
    </section>
  );
}

export default SectionHeading;
