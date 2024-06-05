"use client";
import React from "react";

// const Home = React.forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
const Home = (props: SectionProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div
      // ref={ref}
      // id={props.name}
      className={`page-wrapper home`}
    >
      <h1 className="home-title">WELCOME</h1>
      <h2 className="home-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nulla
        dolores sit amet obcaecati quis odio molestias, maxime, numquam fuga
        ducimus ab dolor aut est reprehenderit cupiditate, libero sunt id!
      </h2>
    </div>
  );
};

export default Home;
