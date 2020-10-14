import React, { useState } from 'react'

export default function Contact({ lungo }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  return (
    <div className="contactPage">
      <div className="desc">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => {
            lungo.sendEvent("contact", {
              description: "blur contact form name",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onBlur={(e) => {
            lungo.sendEvent("contact", {
              description: "blur contact form email",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
        />
        <textarea
          rows="10"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => {
            lungo.sendEvent("contact", {
              description: "blur contact form message",
              event_type: e.type,
              element_type: e.target.tagName,
            })
          }}
        />
        <button
          className="menuButton"
          style={{ marginLeft: "auto" }}
          onClick={(e) => {
            lungo.sendEvent(
              "contact",
              {
                description: "send contact form",
                event_type: e.type,
                element_type: e.target.tagName,
              }
            )
            setEmail("")
            setName("")
            setText("")
          }}
        >Send</button>
      </div>
    </div>
  )
}
