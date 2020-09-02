import React from 'react'
import { Container, Progress, Header } from 'semantic-ui-react'

const LanguageSection = function() {
  return(
    <Container style={{paddingTop:"35px"}}>
      <Header as='h2' content="LANGUAGES" textAlign="center" />
      <Header as='h2' content="English" style={{margin:"0px"}}/>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Native</p>
      <Progress progress='value' value={10} total={10} color='pink'/>
      <Header as='h2' content="Chinese" style={{margin:"0px"}}/>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Professional working proficiency</p>
      <Progress progress='value' value={8} total={10} color='pink'/>
      <Header as='h2' content="Japanese" style={{margin:"0px"}}/>
      <p style={{fontSize:"15px", color: "gray", paddingTop:"0px"}}>Elementary proficiency</p>
      <Progress progress='value' value={5} total={10} color='pink'/>
    </Container>
    
  );
} 

export default LanguageSection
