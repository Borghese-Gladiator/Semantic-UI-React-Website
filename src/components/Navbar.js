import React from 'react'
import { Container, Menu, Icon, Grid } from 'semantic-ui-react'
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    
      <Menu
        fixed='top'
        inverted={true}
        pointing={true}
        size='massive'
        style={{
          backgroundColor: "#262626"
        }}
      >
        <Container>
          <Menu.Item as={ Link }
            name="Home"
            to="home"
            position='right'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Grid>
              <Grid.Column>
                <Icon name='briefcase' />
                Home
              </Grid.Column>
            </Grid>
          </Menu.Item>
          <Menu.Item as={ Link }
            name="About"
            to="about"
            position='right'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Grid>
              <Grid.Column>
                <Icon name='user circle' />
                About
              </Grid.Column>
            </Grid>
          </Menu.Item>
          <Menu.Item as={ Link }
            name="Experience"
            to="experience"
            position='right'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Grid>
              <Grid.Column>
                <Icon name='briefcase' />
                Experience
              </Grid.Column>
            </Grid>
          </Menu.Item>
          <Menu.Item as={ Link }
            name="Projects"
            to="projects"
            position='right'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Grid>
              <Grid.Column>
                <Icon name='code' />
                Projects
              </Grid.Column>
            </Grid>
          </Menu.Item>
          <Menu.Item as={ Link }
            name="Skills"
            to="skills"
            position='right'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Grid>
              <Grid.Column>
                <Icon name='code' />
                Skills
              </Grid.Column>
            </Grid>
          </Menu.Item>
        </Container>
      </Menu>
  )
}