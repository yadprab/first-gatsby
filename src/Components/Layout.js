import React from "react"

import {Nav} from './Nav';
import {Head} from './Head';
//1.create an component for our layout
function Layout(props) {
 
  return (
    <>
      <Head path={props.location.pathname} />
      <Nav />
      {props.children}
    </>
  )
}

export { Layout }
