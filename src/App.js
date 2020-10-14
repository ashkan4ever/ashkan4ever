import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import history from "./utils/history"
import lungo from "./utils/lungo"

import Layout from "./pages/Layout"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Companies from "./pages/Companies"
import Contact from "./pages/Contact"
import BlogContext from "./pages/blogs/BlogContext"
import NotFound from "./pages/NotFound"

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.scss"

export default function App() {
  const myLungo = new lungo("test", "15")

  return (
    <Router history={history}>
      <Layout lungo={myLungo}>
        <Switch>
          <Route exact path="/" render={() => <About lungo={myLungo} />} />
          <Route
            exact
            path="/companies"
            render={() => <Companies lungo={myLungo} />}
          />
          <Route exact path="/blog" render={() => <Blog lungo={myLungo} />} />
          <Route
            exact
            path="/blog/how-pass-data"
            render={() => <BlogContext lungo={myLungo} />}
          />
          <Route
            exact
            path="/blog/how-react-hooks-work"
            render={() => <BlogContext lungo={myLungo} />}
          />
          <Route
            exact
            path="/blog/z-index-not-working"
            render={() => <BlogContext lungo={myLungo} />}
          />
          <Route
            exact
            path="/contact"
            render={() => <Contact lungo={myLungo} />}
          />
          <Route render={() => <NotFound link="/" />} />
        </Switch>
      </Layout>
    </Router>
  )
}
