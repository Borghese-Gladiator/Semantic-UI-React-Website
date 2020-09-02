import React, { Component } from 'react';
import { Rail, Sticky, Divider } from 'semantic-ui-react'
import AboutSection from './sections/aboutSection'
import ProjectSection from './sections/projectSection'
import ResponsiveContainer from '../components/responsiveContainer'
import ExperienceSection from './sections/ExperienceSection'
import MySidebar from '../components/MySidebar'
import SkillSection from './sections/skillSection'
import SummarySection from './sections/summarySection'
import LanguageSection from './sections/languageSection'
import FinalSection from './sections/finalSection';

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

/*
I have found perseverance has always helped me through challenges. From making the USA badminton team with nephrotic syndrome to becoming a finalist at HackUMass despite being one of the youngest hackers, effort makes a difference. I have learned a great life is not an easy stroll, but an arduous climb where I use my all to achieve things.
*/

const ConfettiAddition = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

class HomePage extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#ededed", paddingBottom: '50px',}}>
        <Rail position='left'>
          <Sticky context={this.contextRef}>
            <MySidebar />
          </Sticky>
        </Rail>
        <ConfettiAddition />
        <ResponsiveContainer id="home"/>
        <Divider horizontal style={{fontSize:20}}><i>Hey</i>, I'm</Divider>
        <AboutSection
          title="Timothy Shee"
          id="about"
        />
        <Divider />
        <ExperienceSection
          id="experience"
        />
        <ProjectSection
          header="Projects"
          invert={false}
          img=""
          buzzwords=""
          desc=""
          id="projects"
        />
        <SkillSection
          id="skills"
        />
        <LanguageSection
          id="language"
        />
        <SummarySection
          id="summary"
        />
        <FinalSection
          id="final"
        />
     </div>
    )
  }
}

export default HomePage;