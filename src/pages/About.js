import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import Skill from "../assets/images/skill.jpg"

// const skills = [
//   {
//     basicSkills: [
//       {
//         name: "",
//         percent: 99,
//       },
//     ],
//     librarySkills: 
//   }
// ]

export default function About({ lungo }) {
  return (
    <div className="aboutPage">
      <Accordion>
        <Accordion.Toggle
          onClick={(e) => {
            lungo.sendEvent("about", {
              description: "skills",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
          className="skillHeader"
          variant="link"
          eventKey="0"
        >
          Skills
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <img src={Skill} style={{ width: "100%" }} />
          </Card.Body>
        </Accordion.Collapse>

        <Accordion.Toggle
          onClick={(e) => {
            lungo.sendEvent("about", {
              description: "education",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
          className="skillHeader"
          variant="link"
          eventKey="1"
        >
          Education
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <img src={Skill} style={{ width: "100%" }} />
          </Card.Body>
        </Accordion.Collapse>

        <Accordion.Toggle
          onClick={(e) => {
            lungo.sendEvent("about", {
              description: "languages",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
          className="skillHeader"
          variant="link"
          eventKey="3"
        >
          Languages
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <img src={Skill} style={{ width: "100%" }} />
          </Card.Body>
        </Accordion.Collapse>

        <Accordion.Toggle
          onClick={(e) => {
            lungo.sendEvent("about", {
              description: "social networks",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
          className="skillHeader"
          variant="link"
          eventKey="2"
        >
          Social Networks
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <img src={Skill} style={{ width: "100%" }} />
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </div>
  )
}
