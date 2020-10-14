import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import Ingrow from "./companies/Ingrow"

import METRICS from "../assets/images/24metrics.png"
import INGROW from "../assets/images/ingrow.png"
import ARIANA from "../assets/images/ariana.png"
import ASNIYA from "../assets/images/asniya.jpg"
import TALENT_BRIDGE from "../assets/images/talentBridge.png"

export default function Companies({ lungo }) {
  const items = [
    {
      img: INGROW,
      place: "Spain - Iran",
      year: "2020 - NOW",
      link: "https://ingrow.co",
      content: <Ingrow />,
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "ingrow",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      img: METRICS,
      place: "Germany - Iran",
      year: "2019 - 2020",
      link: "https://24metrics.com",
      content: <Ingrow />,
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "24metrics",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      img: TALENT_BRIDGE,
      place: "Germany - Iran",
      year: "2019 - 2020",
      link: "https://talentbridge.eu.com",
      title: "Talent Bridge",
      content: <Ingrow />,
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "talent bridge",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      img: ASNIYA,
      place: "Iran",
      year: "2016 - 2019",
      title: "Asniya",
      content: <Ingrow />,
      // link: "https://talentbridge.eu.com",
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "asniya",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      img: ARIANA,
      place: "Iran",
      year: "2015 -2016",
      content: <Ingrow />,
      link: "https://arianalabs.com",
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "ariana",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
  ]

  return (
    <div className="companiesPage">
      <Accordion >
        {items.map((item , i) => (
          <>
            <Accordion.Toggle
              className="companyHeader"
              variant="link"
              eventKey={i + ""}
              onClick={item.onClick}
            >
              <img src={item.img} />
              <span className="title">{item?.title}</span>
              <span>{item.place}</span>
              <span>{item.year}</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i + ""}>
              <Card.Body>{item.content}</Card.Body>
            </Accordion.Collapse>
          </>
        ))}
      </Accordion>
    </div>
  )
}
