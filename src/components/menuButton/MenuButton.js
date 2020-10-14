import React from "react"
import { NavLink } from "react-router-dom"

import "./MenuButton.scss"

export default function MenuButton({ text, link, onClick }) {
  return (
    <div>
      <NavLink
        exact
        onClick={onClick}
        to={link}
        className="menuButton"
        activeClassName="active"
      >
        {text}
      </NavLink>
    </div>
  )
}
