import React from 'react'
import { Segment } from 'semantic-ui-react'
import Confetti from 'react-confetti'
import { Wave } from 'react-animated-text';

const FinalSection = () => {
  return (
      <Segment textAlign="center"  style={{ minHeight: 1000, padding: "100px 0" }}>  
        <Confetti
          width={2000}
          height={1000}
        />
        <div
          style={{
            display: "inline-block",
            marginBottom: "1em",
            padding: "2em 1em 1em 1em",
            width: "80%",
            fontSize: "5rem"
          }}
        >
          <Wave text="CONTACT ME ?" effect="stretch" effectChange={2.0} />
        </div>
      </Segment>
  )
}
export default FinalSection