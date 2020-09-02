import React, { Component } from "react";
import { List, Card, Image, Header, Container } from 'semantic-ui-react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import UMassLogoImg from '../../img/umass.png'
import RSASecurityLogoImg from '../../img/RSA_Security_Logo.png'
import AvidLogoImg from '../../img/avid_logo.png'

const iconMapping = {
  'Android Studio':"https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg",
  'Java':"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  'Git': "https://upload.wikimedia.org/wikipedia/commons/a/ad/Git-icon-black.svg",
  'Gradle':"https://upload.wikimedia.org/wikipedia/commons/2/28/Cib-gradle_%28CoreUI_Icons_v1.0.0%29.svg",
  'MongoDB Atlas/Stitch':"https://png2.cleanpng.com/sh/e645d4ad7d8dc8873518201478ccaf2c/L0KzQYm3VMAzN6RvfZH0aYP2gLBuTf1wdph0fNQ2aX7mPbT2jgB2fJZ3ReV4ZoT6ccPsTfJ2e5pzfeV8LYPydsXAggJmNZUyetNELXzoccfsk702aZQ3UaMAZHTnRYi6Wb4xP2Q7SKsDNkG4QoOAUMA3O2gASKgBLoDxd1==/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915ddd5739.0736098615227006379066.png",
  
  'Python':"https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
  'Flask':"https://www.clipartkey.com/mpngs/m/145-1450071_flask-python-logo-transparent.png",
  'Beautiful Soup':"https://python-scripts.com/wp-content/uploads/2019/10/beautifulsoup-html-parsing-example.png",
  'HTML5':"https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_html5-512.png",
  'JavaScript':"https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png",
  'CSS3':"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",

  'Leap Motion':"https://images.squarespace-cdn.com/content/54c95d06e4b04d8d26f97dde/1559240769862-P7VAL66B3PN1T1MAL32A/Leap+Motion+icon.png?content-type=image%2Fpng",
  'Flask-SocketIO':"https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",

  'Ruby':"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  'Linux':"https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png",
  'Jenkins':"https://www.jenkins.io/images/logos/automotive/automotive.png",
  'Agile/Jira':"https://www.pngfind.com/pngs/m/616-6169356_a-complete-guide-for-beginners-atlassian-jira-jira.png",
  
  'Powershell':"https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  'VirtualBox':"https://www.virtualbox.org/graphics/vbox_logo2_gradient.png",
  'React':"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
}

export default class ExperienceSection extends Component{
  constructor(props) {
    super(props)
    
    this.state = {
      'rsa2020': {
        "skills":['Git', 'Agile/Jira', 'Linux', 'MongoDB', 'Python'],
        "desc":`Summary: I created a pipeline to auto test & auto deploy to production new/modified content.
        \nEstablished CI/CD Jenkins Pipeline that automated testing and deployment of threat content (specifically lua parsers and esa rules).
        \nCreated custom scripts to find all modified content, setup for regression tests, aggregate Python nosetest XML reports, and deploy to test production server. This foundation means when all content is added, QA and Release Engineering will have been completely automated for the threat content team.
        \nAutomated Jira (& Zephyr) movement with integration into pipeline. Tickets automatically moved to Ready for Release or Ready for Review depending on test results.
        \nUpdated threat_content JSON scenarios from last year's internship to help co-worker with new hardening requirements`
      },
      'rsa2019':{
        "skills":['Python','Ruby','Linux', 'Jenkins', 'Agile/Jira', 'Git'],
        "desc":`Wrote new Python regression tests for 31 manually tested ESA Rules which use ContextHub data sources, a new feature of the 11.2 release. Created Jenkins pipelines for my regression tests in the daily build on the Bangalore server
        \nAdded automatic import of ContextHub lists and enrichment sources functionality to UniTe framework (a homegrown Python testing framework).
        \nImplemented new Ruby functionality for Data As A Deliverable (dataconfig) tool to deploy live content onto any service (Decoder, Log Decoder, Correlation Server, etc.)
        \nCreated JSON threat content scenarios for dataconfig tool to automate hardening process: deploying pre-packaged threat content from Live and custom content from a local directory.`,
      },
      'avid2018': {
        "skills":['Powershell', 'Git', 'Gradle', 'Jenkins', 'VirtualBox'],
        "desc":`Implemented Powershell scripts to migrate source trees from AccuRev to GitLab. These scripts reduced source tree from 20 GB to 1.9 MB by moving binaries to an internal Nexus server and generating Gradle properties files to download at runtime.
        \nTested the migration by hosting a private GitLab server with a CentOS 7 VM on VirtualBox and set up CI to test the build.
        \nCreated Jenkins pipelines and executors to download nightly builds from internal server and run Windows Batch scripts automatically to test the installers.`,
      }
    };
  }
  render() {
    return (
      <Container id={this.props.id} textAlign="center" style={{fontSize:15}}>
        <Header
          as='h1'
          content='Work Experience & Education'
        />
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="May 2021"
            dateInnerStyle={{ background: '#32a852' }}
            style={{ color: '#32a852' }}
          >
            <Card style={{minWidth:600}}>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={ UMassLogoImg }
                />
                <Card.Header>Graduation - UMass Amherst</Card.Header>
                <Card.Meta>Amherst, MA</Card.Meta>
                <Card.Description>
                  <p>I am on course to receive my Comp. Sci <strong>Bachelor's Degree</strong></p>
                </Card.Description>
              </Card.Content>
            </Card>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="June – July 2020"
            dateInnerStyle={{ background: '#f01e13' }}
            style={{ color: '#f01e13' }}
          >
            <Card style={{minWidth:600}}>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={ RSASecurityLogoImg }
                />
                <Card.Header>Software Engineering Intern - RSA Security</Card.Header>
                <Card.Meta>Bedford, MA</Card.Meta>
                {
                  /*
                  <List horizontal>
                    {this.state.rsa2020["skills"].map((value)=>{
                      return (
                      <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
                        <List.Content>
                          <List.Header>{value}</List.Header>
                        </List.Content>
                      </List.Item>
                      );
                    })}
                  </List>
                  */
                }
                <Card.Description>
                  <h4>NetWitness Team - SIEM Technology</h4>
                  <p style={{whiteSpace: "pre-wrap", fontSize:"tiny"}}>
                    {this.state.rsa2020["desc"]}
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
          </TimelineItem>
          {
            /*
          <TimelineItem
            key="002"
            dateText="07/2020 – 08/2020"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Software Engineering Intern, RSA Security</h3>
            <h4 style={{ color: '#61b8ff' }}>Bedford, MA</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
            */
          }
          <TimelineItem
            key="003"
            dateText="May – August 2019"
            dateInnerStyle={{ background: '#f01e13' }}
            style={{ color: '#f01e13' }}
          >
            <Card style={{minWidth:600}}>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={ RSASecurityLogoImg }
                />
                <Card.Header>Quality Engineering Intern - RSA Security</Card.Header>
                <Card.Meta>Bedford, MA</Card.Meta>
                <List horizontal>
                  {this.state.rsa2019["skills"].map((value)=>{
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
                <Card.Description>
                  <h4>NetWitness Team - SIEM Technology</h4>
                  <p style={{whiteSpace: "pre-wrap", fontSize:"tiny"}}>
                    {this.state.rsa2019["desc"]}
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="July – August 2018"
            dateInnerStyle={{ background: '#6d1787' }}
            style={{ color: '#6d1787' }}
          >
            <Card style={{minWidth:600}}>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={ AvidLogoImg }
                />
                <Card.Header>Software Engineering Intern - Avid</Card.Header>
                <Card.Meta>Burlington, MA</Card.Meta>
                <List horizontal>
                  {this.state.avid2018["skills"].map((value)=>{
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
                <Card.Description>
                  <h4>Media Composer Team - Video Editing Software</h4>
                  <p style={{whiteSpace: "pre-wrap", fontSize:"tiny"}}>
                    {this.state.avid2018["desc"]}
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
          </TimelineItem>
        </Timeline>
      </Container>
    );
  }
}



