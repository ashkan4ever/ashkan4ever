import React from "react"
import { useHistory } from "react-router-dom"

import RENDER_PROPS from "../assets/images/renderprops.webp"
import REACT from "../assets/images/react.png"
import Z_INDEX from "../assets/images/zIndex.png"

export default function Blog({ lungo }) {
  const history = useHistory()

  const items = [
    {
      title: "How to pass data to props.children",
      preview:
        "React makes it easy to pass children to reusable components. But what if those children need to receive data from the component that renders them?",
      img: RENDER_PROPS,
      link: "/blog/how-pass-data",
      onClick: (e) => {
        lungo.sendEvent("blog", {
          description: "navigate to How to pass data to props.children",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      title: "Deep dive: How do React hooks really work?",
      preview:
        "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. They were first introduced in React and have been broadly embraced by other frameworks like Vue, Svelte, and even adapted for general functional JS. ",
      img: REACT,
      link: "/blog/how-react-hooks-work",
      onClick: (e) => {
        lungo.sendEvent("blog", {
          description: "navigate to Deep dive: How do React hooks really work?",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
    {
      title: "4 reasons your z-index isn’t working.",
      preview:
        "What is z-index? Z-index is a CSS property that allows you to position HTML elements in layers on top of one another. It seems simple at first, but it’s deceptively simple.",
      img: Z_INDEX,
      link: "/blog/z-index-not-working",
      onClick: (e) => {
        lungo.sendEvent("blog", {
          description: "navigate to 4 reasons your z-index isn’t working.",
          event_type: e.type,
          element_type: e.target.tagName,
        })
      },
    },
  ]

  return (
    <div className="blogsPage">
      {items.map((item) => (
        <div
          className="box"
          onClick={(e) => {
            item.onClick(e)
            history.push(item.link)
          }}
        >
          <img src={item.img} />
          <hr />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
