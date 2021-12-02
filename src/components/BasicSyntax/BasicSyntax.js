import { Container } from '@mui/material';
import React from 'react';
import './BasicSyntax.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';
import EmbeddedCodepen from '../EmbeddedCodepen/EmbeddedCodepen';

//we use a react hook to render our simple BasicSyntax page
function BasicSyntax() {

  return (
    <Container maxWidth="lg">
      <CustomTypography 
        variant="h3"
        color={AppTheme.palette.secondary}
        marginBottom="20px"
      >
        Basic JavaScript Syntax
      </CustomTypography>
      <CustomTypography
        variant="p"
      >
        {/* text here */}
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "MWEYNZm"
        defaultTab= "js"
        editable= "true"
        theme= "dark"
        height= "300"
        width= "100%"
        scrolling= "no"
        title= "Variables"
        frameborder= "no"
        loading= "lazy"
        allowtransparency= "true"
        allowfullscreen= "true"
      />
    </Container>
  );
}

export default BasicSyntax;