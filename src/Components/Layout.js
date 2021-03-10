import React from "react"

import {Nav} from './Nav';
//1.create an component for our layout
function Layout(props) {
  
  return (
    <>
       <Nav/>
      {props.children}
    
    </>
  )
}

export { Layout }
