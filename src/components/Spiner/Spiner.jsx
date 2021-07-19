import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spiner = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>
    <h1>HOLAAA</h1>
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    {/* <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment> */}
  </div>
)

export default Spiner