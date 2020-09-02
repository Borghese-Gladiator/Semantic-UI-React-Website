import React from "react";
import { List, Grid, Container, Header, Icon } from 'semantic-ui-react'

const FrontEndTools = ["React", "Redux", "React Native", "Angular", "UI/UX"]
const MLTools = ["tensorflow","scitkit","keras","nltk","openCV"]
const FunctionalTools = ["Closures","Partial Functions","Currying", "Node.js Streams"]

//Semantic UI Grid uses 16 columns
export default function SummarySection({id}) {
  return (
    <Container id={id}>
      <Grid columns={3} divided textAlign='center' style={{paddingTop: '30px', fontSize: "18px"}} >
        <Grid.Row>
          <Header
          as='h1'
          content='SUMMARY'
        />
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <Icon name="file code outline" size="huge"></Icon>
            <h2>FrontEnd Engineer</h2>
            <br/>
            <p>I value clean content structure, clean design patterns, and thoughtful interactions</p>
            <h3 style={{color:"purple"}}>Things I enjoy building</h3>
            <p>Web, Mobile, Apps</p>
            <h3 style={{color:"purple"}}>FrontEnd Tools</h3>
            <List>
              {FrontEndTools.map((value)=>{
                return (
                <List.Item>
                  <List.Content>{value}</List.Content>
                </List.Item>
                );
              })}
            </List>
          </Grid.Column>
          <Grid.Column>
            <Icon name="book" size="huge"></Icon>
            <h2>Machine Learning</h2>
            <br/>
            <p>I love that ML is more than an API call to scikit-learn. The math & theory and implementation draw my interest.</p>
            <h3 style={{color:"purple"}}>Things I enjoy building</h3>
            <p>Chatbots, Neural Nets, Q-Learning Agents</p>
            <h3 style={{color:"purple"}}>ML Tools</h3>
            <List>
              {MLTools.map((value)=>{
                return (
                <List.Item>
                  <List.Content>{value}</List.Content>
                </List.Item>
                );
              })}
            </List>
          </Grid.Column>
          <Grid.Column>
            <Icon name="terminal" size="huge"></Icon>
            <h2>Functional Programmer</h2>
            <br/>
            <p>I like the easy testing/debugging and high level abstraction of functional programming</p>
            <h3 style={{color:"purple"}}>Things I enjoy building</h3>
            <p>Web, Mobile, Apps</p>
            <h3 style={{color:"purple"}}>Functional Concepts</h3>
            <List>
              {FunctionalTools.map((value)=>{
                return (
                <List.Item>
                  <List.Content>{value}</List.Content>
                </List.Item>
                );
              })}
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}