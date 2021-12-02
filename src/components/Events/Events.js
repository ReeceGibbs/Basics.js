import { Container } from '@mui/material';
import React from 'react';
import './Events.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';

//we use a react hook to render our simple Events page
function Events() {

  return (
    <Container maxWidth="lg">
      <CustomTypography 
        variant="h3"
        color={AppTheme.palette.secondary}
        marginBottom="20px"
      >
        Events in JavaScript
      </CustomTypography>
      <CustomTypography
        variant="p"
      >
        {/* text here */}
      </CustomTypography>
      <br/>
      <br/>
    </Container>
  );
}

export default Events;