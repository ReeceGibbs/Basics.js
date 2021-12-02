import { Container } from '@mui/material';
import React from 'react';
import './JQuery.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';

//we use a react hook to render our simple JQuery page
function JQuery() {

  return (
    <Container maxWidth="lg">
      <CustomTypography 
        variant="h3"
        color={AppTheme.palette.secondary}
        marginBottom="20px"
      >
        JQuery
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

export default JQuery;