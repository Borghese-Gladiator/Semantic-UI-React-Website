import React, { Component } from "react";
import { Icon, Grid, Header, Container, Card, List } from 'semantic-ui-react'
//import Project from '../tileComponent/project'

export default class SkillSection extends Component{
  constructor(props) {
    super(props)
    this.state = {
      'skillsList': [
        {
          "header":"JavaScript",
          "imgName":"js square",
          "skills":['React','React Native', 'Redux','ES6','Node.js'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Python",
          "imgName":"python",
          "skills":['TensorFlow','SciKit','Numpy','Pandas','Flask'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Database",
          "imgName":"database",
          "skills":['MongoDB','PostgreSQL','SQLite','Firebase'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Continuous Integration",
          "imgName":"recycle",
          "skills":['Jenkins','TravisCI'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"OS Related",
          "imgName":"windows",
          "skills":['Bash','Windows Batch','Powershell', 'VMs (VirtualBox)','Android'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Build Tools",
          "imgName":"cogs",
          "skills":['Webpack', 'Gradle','Maven','Ant'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Testing",
          "imgName":"redriver",
          "skills":['Mocha','Chai','SinonJS','unittest', 'jUnit'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        },
        {
          "header":"Other",
          "imgName":"ellipsis horizontal",
          "skills":['Git', 'Agile w/ Jira', 'Heroku', 'REST APIs', 'GraphQL'],
          "imgSrc":"https://react.semantic-ui.com/images/wireframe/image.png"
        }
      ]
    };
  }
  render() {
    /*
    98 x 116
    98 x 116
    98 x 116
    112 x 116
    */
    return (

      <Container id={this.props.id} textAlign='center'>
        <Header
          as='h1'
          content='SKILLS'
        />
        <Card.Group itemsPerRow={4}>
          {this.state.skillsList.map((value)=>{
            return(
              <Card color='red' >
                <Grid>
                  <Grid.Column>
                    <Icon name={value["imgName"]} wrapped size="massive" />
                  </Grid.Column>
                </Grid>
                <Card.Content>
                  <Card.Header>{value["header"]}</Card.Header>
                  <Card.Description>
                    <List size='large'>
                      {value.skills.map((aSkill) => {
                        return(
                          <List.Item>{aSkill}</List.Item>
                        )
                      }
                      )}
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
        
      </Container>
    );
  }
}
