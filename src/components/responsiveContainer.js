import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import ReactTypingEffect from 'react-typing-effect'

import Pdf from '../pdf/Current_Resume.pdf'
import MyBackgroundImg from '../img/intro-bg.png'
//import MyBackgroundImg from './intro-bg.jpg'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container >
    <Header
      as='h1'
      content=''
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    >
      <ReactTypingEffect
        className="typingeffect"
        text={['Full Stack Developer','Neural Network Enthusiast','NLP / Chatbot Hobbyist']}
        speed={80}
        eraseDelay={450}
      />
      {/*Computational Linguist, */}
    </Header>
    <Header
      as='h2'
      content='"The secret to getting ahead is getting started."'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <h2 align="right" style={{paddingRight:'50px'}}>-Mark Twain{'   '}</h2>
    <Button animated primary size='huge'>
      <Button.Content visible>Get Started</Button.Content>
      
        <Button.Content as="a" href={Pdf} target="_blank" hidden style={{color: "inherit"}}>
            Resume {' '}
            <Icon name='right arrow' />
        </Button.Content>
      
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
  }
  

  hideFixedMenu() { 
    this.setState({ fixed: false })
  }
  showFixedMenu() {
    this.setState({ fixed: true })
  } 

  render() {
    const { children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 1000, padding: '70px 0' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  

  handleSidebarHide() { 
    this.setState({ sidebarOpened: false })
  }
  handleToggle() {
    this.setState({ sidebarOpened: true })
  } 

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ id, children }) => (
  <div id={id} style={{backgroundImage: `url(${MyBackgroundImg})`}}>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer