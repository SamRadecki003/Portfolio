import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    {/* <SectionText>
      I've worked with a range of Technologies in the web developments world
      from front-end to back-end.
    </SectionText> */}
    <List>
      <ListItem>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>Experience with: </ListParagraph>
        <ListParagraph> - CSS</ListParagraph>
        <img src='/images/css3.svg' width='100' height='100' />
        <ListParagraph> - HTML</ListParagraph>
        <img src='/images/html5.svg' width='100' height='100' />
        <ListParagraph> - Javascript</ListParagraph>
        <img src='/images/javascript.svg' width='100' height='100' />
        <ListParagraph> - Java</ListParagraph>
        <img src='/images/java.svg' width='100' height='100' />
        <ListParagraph> - Python</ListParagraph>
        <img src='/images/python.svg' width='100' height='100' />
        <ListParagraph> - and more</ListParagraph>
      </ListItem>
      <ListItem>
        <ListTitle>Libraries and Frameworks</ListTitle>
        <ListParagraph>Experience with: </ListParagraph>
        <ListParagraph> - React</ListParagraph>
        <img src='/images/react.svg' width='100' height='100' />
        <ListParagraph> - Redux</ListParagraph>
        <img src='/images/redux.svg' width='100' height='100' />
        <ListParagraph> - Node.js</ListParagraph>
        <img src='/images/nodejs.svg' width='100' height='100' />
        <ListParagraph> - Bootstrap</ListParagraph>
        <img src='/images/bootstrap.svg' width='100' height='100' />
        <ListParagraph> - Material-UI</ListParagraph>
        <img src='/images/materialui.png' width='100' height='100' />
        <ListParagraph> - and more</ListParagraph>
      </ListItem>
      <ListItem>
        <ListTitle>Tools and API</ListTitle>
        <ListParagraph>Experience with: </ListParagraph>
        <ListParagraph> - PostgreSQl</ListParagraph>
        <img src='/images/postgresql.svg' width='100' height='100' />
        <ListParagraph> - Heroku</ListParagraph>
        <img src='/images/heroku.png' width='100' height='100' />
        <ListParagraph> - and more</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
