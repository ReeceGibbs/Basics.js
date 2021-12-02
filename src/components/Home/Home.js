import { Container } from '@mui/material';
import React from 'react';
import './Home.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';

//we use a react hook to render our simple home page
function Home(props) {

  return (
    <Container maxWidth="lg">
      <CustomTypography 
        variant="h3"
        color={AppTheme.palette.secondary}
        marginBottom="20px"
      >
        Welcome to JavaScript!
      </CustomTypography>
      <CustomTypography
        variant="p"
      >
        Well done on taking the first step in learning how to code! You've picked a phenomenal language to start with.
        <br/>
        <br/>
        Anyone with a modern web browser and an inquisitive mind could write their first JavaScript application within a matter of 
        minutes. However, this is not to say that JavaScript is not an incredibly powerful language. There is a huge amount can be achieved 
        with just Vanilla JavaScript, but with frameworks like React, AngularJS, Node.js, Express.js, etc. we can spin up large-scale, 
        enterprise-grade applications quicker than ever before.
        <br/>
        <br/>
        Sounds good doesn't it? Well, it is!
        <br/>
        Feel free to browse our website to learn a bit more or take a look at some of the awesome references below.
      </CustomTypography>
      <br/>
      <br/>
      {props.referenceTable}
    </Container>
  );
}

export default Home;