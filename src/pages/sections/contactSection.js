import React from "react";
import { Icon, Container, List } from 'semantic-ui-react';

export default function ContactSection({id}) {
  return (
    <Container id={id} textAlign="center">
      <List animated horizontal>
        <List.Item>
          <List.Content>
            <a href="https://github.com/timothy-shee" style={{color:"inherit"}}>
              <Icon.Group size='big'>
                <Icon loading size='small' name='circle notch' />
                <Icon name='github' />
              </Icon.Group>
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a href="https://www.linkedin.com/in/timothy-shee-aa46a5170/" style={{color:"inherit"}}>
              <Icon.Group size='big'>
                <Icon loading size='small' name='circle notch' />
                <Icon name='linkedin' />
              </Icon.Group>
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a href='mailto:tim.shee0791@gmail.com' style={{color:"inherit"}}>
              <Icon.Group size='big'>
                <Icon loading size='small' name='circle notch' />
                <Icon name='mail' />
              </Icon.Group>
            </a>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
}