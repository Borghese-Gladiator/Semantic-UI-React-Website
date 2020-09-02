import React from 'react'
import { Container, List, Icon, Image, Menu, Sidebar } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import KittenPuppyImg from '../img/kitten-puppy-cute.png'

export default function MySidebar() {
  //const [visible, ] = useBooleanKnob({ name: 'visible' })
  const [open, setOpen] = React.useState(true);
  const handleToggle = () => {
    setOpen(!open);
  }
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      onHide={handleToggle}
      vertical
      visible
      style={{
        paddingTop: '25px',
        backgroundColor: "#262626",
        width: '275px',
        marginLeft: '-275px'
      }}
    >
      <Container>
        <Image src={KittenPuppyImg} size='medium' circular bordered/>
      </Container>
      <br/>
      <FadeIn delay='500' transitionDuration='500'>
        <h1 style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 30, color:"#f7f7f7"}}><b>TIMOTHY SHEE</b></h1>
        <br/>
        <br/>
        <List inverted verticalAlign='middle' animated>
          <List.Item>
            <List.Content as="a" href="mailto:test@example.com" style={{color:"inherit"}} >
              <Icon name='mail' size='big'/>
              tim.shee0791@gmail.com
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content as="a" href="https://github.com/timothy-shee" target="_blank" style={{color:"inherit"}} >
              <Icon name='github' size='big'/>
              github.com/timothy-shee
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content as="a" href="https://www.linkedin.com/in/timothy-shee-aa46a5170/" target="_blank" style={{color:"inherit"}} >
              <Icon name='linkedin' size='big'/>
              linkedin.com/timothy-shee
            </List.Content>
          </List.Item>
        </List>
      </FadeIn>
    </Sidebar>
  )
}