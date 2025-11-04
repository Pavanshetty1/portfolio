import "./portfolio.css";

import IMG1 from "../../assets/ecommerce.webp";
import IMG2 from "../../assets/Hostel-Management-System.webp";
import IMG3 from "../../assets/cloud.jpg";
import IMG4 from "../../assets/dash.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "E Commerce",
      img: IMG1,
      description:
        "An e-commerce web application that allows users to browse products, add items to cart, and make secure online purchases. Built with a responsive design and integrated payment gateway for a seamless shopping experience.",
      technologies: "Html | CSS | Javascript",
    },
    {
      id: 2,
      title: "Hostel Management System",
      img: IMG2,
      description:
        "A web-based Hostel Management System to manage student registrations, room allocations, and fee records efficiently.",
      technologies: "Html | CSS | Javascript | React Js",

     
    },
    {
      id: 3,
      title: "Cloud Device Management",
      img: IMG3,
      description: "A cloud-based system for monitoring, controlling, and updating IoT devices remotely.Ensures real-time connectivity, device health tracking, and secure data synchronization.",
      technologies: "Html | CSS | Javascript | React Js | Mui Framework",
    },
    {
      id: 4,
      title: "Health DashBoard",
      img: IMG4,
      description:
        "A web-based Health Dashboard that visualizes patient health data and daily activity metrics.Helps users monitor vital signs, fitness progress, and overall wellness in real time..",
      technologies: "Html | CSS | JavaScript",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
