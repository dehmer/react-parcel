import React from "react"
import { render } from "react-dom"

const HelloMessage = props => <div>Hello { props.name }</div>

const root = document.getElementById("root")
render(<HelloMessage name="Joe!" />, root)
