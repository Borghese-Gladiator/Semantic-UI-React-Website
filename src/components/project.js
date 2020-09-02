import React from "react";
import { Card, List, Grid, Image, Header, Segment } from 'semantic-ui-react'

export default function Project() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <Card style={{minWidth:700, paddingTop:'25px'}}>
          <Header size='medium'>{this.props.header}</Header>
          <List horizontal>
            {this.props.skills.map((value)=>{
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
          <Card.Description style={{whiteSpace: "pre-wrap"}}>
            {this.props.desc}
          </Card.Description>
          <Segment><a href={this.props.link}>Click to try: { this.props.link }</a></Segment>
        </Card>
        
      </Grid.Column>
      <Grid.Column width={6}>
        <Image size='big' src={ this.props.imgSrc }/>
      </Grid.Column>
    </Grid>
  );
}