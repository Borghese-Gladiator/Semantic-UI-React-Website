import React from 'react';
import { Icon, Segment, Grid, Button } from 'semantic-ui-react';
export default function Footer() {
  return (
    <footer>
      <Segment
        inverted
        huge
        style={{ minHeight: 100, padding: '1em 0em'}}
      >
        
        <Grid>
          <Grid.Column textAlign="center" floated='bottom'>
            <Button>This is the bottom <Icon name='hand point down'/></Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </footer>
  )
}