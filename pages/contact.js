import React, { Component } from 'react'
import P from '../components/paragraph'
import { Button, Label, Textarea, toaster } from 'evergreen-ui'

export default class extends Component {
  state = { message: '' }

  render() {
    return (
      <div>
        <h1>My Contact Me</h1>
        <P>
          <span>
            <a href="https://www.google.com/maps/place/101%2BPolk%2BSt,%2BSan%2BFrancisco,%2BCA%2B94102/@37.777724,-122.420511,17z/data%3D!3m1!4b1!4m5!3m4!1s0x8085809bfd6b3a3f:0x69c39d21628caf4a!8m2!3d37.7776622!4d-122.4184591">
              San Francisco, CA 94102
            </a>
          </span>
          <span> │</span>
          <a href="mailto:mattbarrazacarl@gmail.com">
            mattbarrazacarl@gmail.com
          </a>

          <span> │</span>
          <span>
            <a href="https://github.com/PerStirpes">github.com/PerStirpes</a>
          </span>
          <span> </span>
          <span>│ </span>
          <span>
            <a href="https://www.linkedin.com/in/barrazacarl">
              linkedin.com/in/barrazacarl
            </a>
          </span>
        </P>
        <form onSubmit={this.handleSubmit}>
          <Label size={600} display="block">
            <Textarea
              textSize={'200'}
              onInput={this.handleInput}
              value={this.state.message}
              placeholder="Write your message here"
              borderRadius={20}
            />
          </Label>
          <div />
        </form>
        <div>
          <Button
            marginRight={8}
            onClick={() =>
              toaster.warning("Submiting the message doesn't work", {
                description:
                  'This page was setup to integrate a source into segment and then pipe it into google analytics ',
              })
            }
          >
            Warning don't press
          </Button>
        </div>
        <style jsx>{`
          div {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-content: center;
            align-items: center;
          }

          textarea {
            min-height: 120px;
          }
          div > button {
            margin: 12px;
          }
          a,
          a:visited,
          a:active {
            padding-left: 6px;
            color: #3db077;
            font-weight: bold;
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }

  handleInput = e => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    global.analytics.track('Form Submitted', {
      message: this.state.message,
    })
    this.setState({ message: '' })
  }
}
