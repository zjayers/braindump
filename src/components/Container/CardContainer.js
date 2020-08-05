import React from "react";
import ResourceCard from "../ResourceCard/ResourceCard";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/cjs/Tab";
import Tabs from "react-bootstrap/Tabs";

const CardContainer = ({ title, headings }) => {
  const toTitleCase = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <section id={title.toLowerCase()}>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand className="nav-title" href="#">
          {toTitleCase(title)}
        </Navbar.Brand>
      </Navbar>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        {Object.keys(headings).map((heading) => (
          <Tab eventKey={heading} title={heading}>
            <div className="card-container">
              {headings[heading].map((url) => (
                <ResourceCard key={url} url={url} />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default CardContainer;
