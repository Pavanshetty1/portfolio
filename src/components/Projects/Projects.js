import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/ecommerce.png";
import editor from "../../Assets/Projects/dashboard.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E- commerce"
              description=" Implemented E-SHOP project using HTML, CSS, and JavaScript for frontend development.• Developed an online platform allowing users to browse and purchase products or services.• Integrated features such as product listings, shopping cart, secure payment processing, user accounts, andorder tracking."
              ghLink="https://github.com/Pavanshetty1/Ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Simple Dashboard"
              description="I created simple Dashboard using React js. The Dashboard Shows About Loan , Loan Table etc ."
              ghLink="https://github.com/Pavanshetty1/dashboard"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cloud Based Device Management"
              description="I worked on a project called Cloud-Based Device Management.• This is an IOT-based project, where I utilized React JS as the frontend, Node JS as the backend, and MYSQLdatabase to store data.   "           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="I have created Portfolio using React js.  This Portfolio explains my projects,skill etc."
              ghLink="https://github.com/Pavanshetty1/Portfolio"
              
            />
          </Col>

          
    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
