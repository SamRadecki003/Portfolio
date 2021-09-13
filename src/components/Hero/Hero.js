import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Samantha Radecki's Portfolio
      </SectionTitle>
      <SectionText center>
        I am a former Math and Computer Science Teacher who became a Software
        Engineer through a 17-week immersive software engineering program. I was
        able to apply my mathematical logic I would use to solve math problems
        to complete programming problems. I am excited to use my skills of
        problem solving and logic to develop a full stack application with a
        small team and break down barriers as a woman in the technology field.
      </SectionText>
      <Button
        onCLick={() =>
          (window.location = "#about")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
