import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./skill.css";

const Skill = () => {
  return (
    <section id="experience">
      <h5>Tools Used</h5>
      {/* <h2>Tools</h2> */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Version Control - Git</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>VS Code</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Jira</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Deployment - Vercel</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
