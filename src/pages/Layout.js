import React from 'react'

import MenuButton from "../components/menuButton/MenuButton"

import PROFILE from "../assets/images/profile.jpeg"

export default function Layout({ lungo, children }) {
  const menuItems = [
    {
      text: "About me",
      link: "/",
      onClick: (e) => {
        lungo.sendEvent("about", {
          description: "paginate",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      text: "Companies",
      link: "/companies",
      onClick: (e) => {
        lungo.sendEvent("companies", {
          description: "paginate",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      text: "Blog",
      link: "/blog",
      onClick: (e) => {
        lungo.sendEvent("blog", {
          description: "paginate",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      text: "Contact",
      link: "/contact",
      onClick: (e) => {
        lungo.sendEvent("contact", {
          description: "paginate",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
  ]

  return (
    <div className="layout">
      <div className="header" >
        <div className="me">
          <img src={PROFILE} alt="" id="profileImage" />
          <p>
            All those moments will be lost in time, like tears in rain. 
            All those moments will be lost in time, like tears in rain.
            All those moments will be lost in time, like tears in rain.
            All those moments will be lost in time, like tears in rain.
          </p>
        </div>
        <div className="menu">
          {menuItems.map((item) => (
            <MenuButton
              onClick={item.onClick}
              link={item.link}
              text={item.text}
            />
          ))}
        </div>
        <hr />
      </div>
      <div className="children">{children}</div>
    </div>
  )
}
