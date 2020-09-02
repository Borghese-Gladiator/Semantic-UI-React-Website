import React, { Component } from "react";
import { Icon, Card, List, Grid, Image, Header, Segment, Divider, Container } from 'semantic-ui-react'
import CommunityHeroImg from '../../img/community-hero.png'
import LeapMotionImg from '../../img/leap-motion.png'
import BeautifulSoupImg from '../../img/beautiful-soup.png'

const iconMapping = {
  'Git': "https://upload.wikimedia.org/wikipedia/commons/a/ad/Git-icon-black.svg",
  'MongoDB Atlas/Stitch':"https://png2.cleanpng.com/sh/e645d4ad7d8dc8873518201478ccaf2c/L0KzQYm3VMAzN6RvfZH0aYP2gLBuTf1wdph0fNQ2aX7mPbT2jgB2fJZ3ReV4ZoT6ccPsTfJ2e5pzfeV8LYPydsXAggJmNZUyetNELXzoccfsk702aZQ3UaMAZHTnRYi6Wb4xP2Q7SKsDNkG4QoOAUMA3O2gASKgBLoDxd1==/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915ddd5739.0736098615227006379066.png",
  'Gradle':"https://upload.wikimedia.org/wikipedia/commons/2/28/Cib-gradle_%28CoreUI_Icons_v1.0.0%29.svg",
  'Java':"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  'React':"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  'Powershell':"https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  'Android Studio':"https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg",
  
  'Python':"https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
  'Flask':"https://www.clipartkey.com/mpngs/m/145-1450071_flask-python-logo-transparent.png",
  'Beautiful Soup':"https://python-scripts.com/wp-content/uploads/2019/10/beautifulsoup-html-parsing-example.png",
  'HTML5':"https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_html5-512.png",
  'JavaScript':"https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png",
  'CSS3':"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",

  'Leap Motion':"https://images.squarespace-cdn.com/content/54c95d06e4b04d8d26f97dde/1559240769862-P7VAL66B3PN1T1MAL32A/Leap+Motion+icon.png?content-type=image%2Fpng",
  'Flask-SocketIO':"https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",

  'Jenkins':"",
  'VirtualBox':""
}

export default class ProjectSection extends Component{
  constructor(props) {
    super(props)
    this.state = {
      'projectList': [
        {
          "header":"HackUMass 2019: Transposit API Winner",
          "skills":['Android Studio','Java','Gradle','MongoDB Atlas/Stitch','Git'],
          "desc":`A community event manager app where people collaborate to make/join social events for the greater good. Users participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests`,
          "imgSrc":'../../img/Community-Hero.png',
          "link":"https://dashboard.hackumass.com/projects/63"
        },
        {
          "header":"LexHack: Movie Web Scraper",
          "skills":['Python','Flask','Beautiful Soup','HTML5','JavaScript', 'CSS3'],
          "desc":"Designed a web scraper server with Python to analyze HTML pages from IMDB website. \nDisplay movie list in webapp with JavaScript through REST API exposed through Flask server",
          "imgSrc":"../../img/Community-Hero.png",
          "link":""
        },
        {
          "header":"HackUmass 2018: Top 3 Winner",
          "skills":["Leap Motion", "Python", "Flask", "Flask-SocketIO", "JavaScript", "HTML5"],
          "desc":"Achieved top 3 finalist of 121 teams and 1000 hackers by making a motion activated music controller. Ensured certain hand gestures are registered as media commands such as play/pause, skip track, and control volume. Commands are shown on a browser by opening websocket to Flask server and displaying results with JavaScript to each client session.",
          "imgSrc":"../../img/Community-Hero.png",
          "link":""
        }
      ]
    };
  }
  render() {
    return (
      <Container id={this.props.id} style={{fontSize:15, paddingBottom:'25px', textAlign:"center"}}>
        <Header
          as='h1'
          content='PROJECTS'
        />
        <Grid>
          <Grid.Column width={10}>
            <Card style={{minWidth:700, paddingTop:'25px'}}>
              <Header size='medium'>{this.state.projectList[0].header}</Header>
              <List horizontal>
                {this.state.projectList[0].skills.map((value)=>{
                  return (
                  <List.Item>
                    <Image avatar src={ iconMapping[value] } />
                    <List.Content>
                      <List.Header>{value}</List.Header>
                    </List.Content>
                  </List.Item>
                  );
                })}
              </List>
              <br/>
              <Card.Description style={{whiteSpace: "pre-wrap", marginLeft: '20px', textAlign:"left"}}>
                {this.state.projectList[0].desc}
                <a href="https://www.youtube.com/watch?v=lnA8XQ_kRu0&feature=youtu.be"><p>Youtube Link: <Icon name="youtube" /></p></a>
              </Card.Description>
              <Segment><a href={this.state.projectList[0].link}>Click to try: { this.state.projectList[0].link }</a></Segment>
            </Card>            
          </Grid.Column>
          <Grid.Column width={6}>
            <Image size='big' src={ CommunityHeroImg }/>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid>
          <Grid.Column width={10}>
            <Card style={{minWidth:700, paddingTop:'25px'}}>
              <Header size='medium'>{this.state.projectList[1].header}</Header>
              <List horizontal>
                {this.state.projectList[1].skills.map((value)=>{
                  return (
                  <List.Item>
                    <Image avatar src={ iconMapping[value] } />
                    <List.Content>
                      <List.Header>{value}</List.Header>
                    </List.Content>
                  </List.Item>
                  );
                })}
              </List>
              <br/>
              <Card.Description style={{whiteSpace: "pre-wrap", marginLeft: '20px', textAlign:"left"}}>
                {this.state.projectList[1].desc}
              </Card.Description>
              <Segment><a href={this.state.projectList[1].link}>Click to try (hackathon 2018 link is now deactivated): { this.state.projectList[1].link }</a></Segment>
            </Card>            
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={6} centered>
            <Image size='large' src={ BeautifulSoupImg }/>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid>
          <Grid.Column width={10}>
            <Card style={{minWidth:700, paddingTop:'25px'}}>
              <Header size='medium'>{this.state.projectList[2].header}</Header>
              <List horizontal>
                {this.state.projectList[2].skills.map((value)=>{
                  return (
                  <List.Item>
                    <Image avatar src={ iconMapping[value] } />
                    <List.Content>
                      <List.Header>{value}</List.Header>
                    </List.Content>
                  </List.Item>
                  );
                })}
              </List>
              <br/>
              <Card.Description style={{whiteSpace: "pre-wrap", marginLeft: '20px', textAlign:"left"}}>
                {this.state.projectList[2].desc}
              </Card.Description>
              <Segment><a href={this.state.projectList[2].link}>Click to try (hackathon 2018 link is now deactivated): { this.state.projectList[2].link }</a></Segment>
            </Card>            
          </Grid.Column>
          <Grid.Column width={6}>
            <Image size='big' src={ LeapMotionImg }/>
          </Grid.Column>
        </Grid>
        <Divider />
        {/*this.state.projectList.map((value)=>{
        return(
        <div>
          <Project
            header={value["header"]}
            skills={value["skills"]}
            desc={value["desc"]}
            imgSrc={value["imgSrc"]}
            link={value["link"]}
          />
          <Divider />
        </div>
        );
        })*/}
      </Container>
    );
  }
}
