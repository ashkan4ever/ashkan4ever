import React from "react"

import NADER from "../../assets/images/nader.jpeg"
import INGROWT from "../../assets/images/ingrowT.jpg"

const recoms = [
  {
    text: "All those moments will be lost in time, like tears in rain.",
    img: NADER,
    title: "Nader Heidary",
    link:
      "https://www.linkedin.com/in/nader-heydari-5609315a/?originalSubdomain=ir",
  },
  {
    text: "All those moments will be lost in time",
    img: NADER,
    title: "Nader Heidary",
    link:
      "https://www.linkedin.com/in/nader-heydari-5609315a/?originalSubdomain=ir",
  },
  {
    text: "All those moments will be lost in time, like tears in rain. , like tears in rain. , like tears in rain.",
    img: NADER,
    title: "Nader Heidary",
    link:
      "https://www.linkedin.com/in/nader-heydari-5609315a/?originalSubdomain=ir",
  },
  {
    text: "All those moments will be lost in time, like tears in rain. , like tears in rain. , like tears in rain. All those moments will be lost in time, like tears in rain. All those moments will be lost in time, like tears in rain.",
    img: NADER,
    title: "Nader Heidary",
    link:
      "https://www.linkedin.com/in/nader-heydari-5609315a/?originalSubdomain=ir",
  },
]

export default function Ingrow() {
  return (
    <div className="companyContainer">
      <div className="companyDesc">
        <h2>How we started?</h2>
        <p>
          Ingrow is formed out of the experience and the bold culture of a
          startup. Ingrow team members, each one having experience working on
          domestic and foreign startups, decided to focus on one of their most
          important common challenges, which is the ability to be real-time
          highly scalable on the data. With the knowledge and experience gained,
          and by relying on the courage of their youth, they designed a platform
          so that not only it addresses their concerns, but also is it able to
          play a role in the value cycle of the new generation of startups and
          enterprise software as an efficient platform. This was the beginning
          point and the birth of Ingrow.
        </p>
        <img src={INGROWT} style={{ width: "100%"}} />
        <h2>Our Goals</h2>
        <p>
          We believe that platforms will be the main players in the Fourth
          Industrial Revolution. Knowing that the future of technology will be
          in the hands of artificial intelligence, the Internet of Things, big
          data, and so on, we have created a platform to be the main actors in
          the fields of startups and organizations. Ingrow’s goal is
          development, and having startup teams to no longer worry about
          real-time data collection and high-speed data processing, leaving the
          task to Ingrow.
        </p>
      </div>
      <div className="companyRecoms">
        {recoms.map((item) => (
          <div className="recomContainer">
            <a target="_blank" href={item.link}>
              <img src={item.img} alt={item.title} title={item.title} />
            </a>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
