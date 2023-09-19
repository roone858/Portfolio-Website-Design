import React, { useState } from "react";
import "../styles/skills.css";
import { Skill } from "./reusable/Skill";

export const Skills = () => {
  const skills = [
    {
      name: "Html",
      value: "50%",
    },
    {
      name: "Css",
      value: "70%",
    },
    {
      name: "Bootstrap",
      value: "30%",
    },
    {
      name: "JavaScript",
      value: "40%",
    },
    {
      name: "Node.js",
      value: "80%",
    },
    {
      name: "TypeScript",
      value: "50%",
    },
  ];
  return (
    <section className="skills ">
      <div className="container py-5 ">
        <div className="header p-3 text-center ">
          <h3 className="mb-4" style={{ fontSize: "3rem" }}>
            Skills
          </h3>
          <p className="px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repudiandae consequuntur iusto hic, cupiditate reiciendis quasi
            voluptatem nisi delectus rerum nemo libero deleniti modi quas culpa
            unde quos labore? Error! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Totam corrupti molestias qui officia unde
            incidunt, in quam voluptates fugit consectetur?
          </p>
        </div>
        <div className="py-5">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <div className="left text-center">
                <h4>MY FOUCS</h4>
                <hr />
                <ul className="items">
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Web Design</li>
                  <li>Mobile App Design</li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="right">
                {skills.map((skill) => (
                  <Skill name={skill.name} value={skill.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
