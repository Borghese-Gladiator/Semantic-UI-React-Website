import React from "react";
import { Grid, Container } from 'semantic-ui-react'

const currentStatusText = `I am a Comp Sci. Senior at UMass Amherst graduating May 2021.`
const aboutText = `I love coding challenges, hackathons, and investing my free time in projects with CS major college friends.` + 
`\nThroughout college, I have attended 10+ hackathons and been a member of the Google Developer Club.`

//Semantic UI Grid uses 16 columns
export default function AboutSection({id }) {
  return (
    <Container id={id} style={{paddingBottom:'25px'}}>
      <Grid textAlign='center'>
        <Grid.Row>
          <Grid.Column>
            <h1 style={{fontSize:40}}>Timothy Shee</h1>
            <h3 style={{fontSize:22}}>{currentStatusText}</h3>
            <p style={{whiteSpace: "pre-wrap", fontSize:18}}>{aboutText}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}