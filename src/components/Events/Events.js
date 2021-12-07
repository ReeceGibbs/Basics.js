import { Container, Link } from '@mui/material';
import React from 'react';
import './Events.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';
import EmbeddedCodepen from './../EmbeddedCodepen/EmbeddedCodepen';

//we use a react hook to render our simple Events page
function Events() {

  return (
    <Container maxWidth="lg">
     <CustomTypography 
        variant="h3"
        color={AppTheme.palette.secondary}
        marginBottom="20px"
      >
        Events
      </CustomTypography>
      <CustomTypography variant="p">
        These days the majority of the webpages you come across are dynamic. This means that the content of the page can change based on the user's context. On this webpage for example, you can collapse and expand the sidebar without refreshing the page. This processing 
        happens in your browser and not on the server on which the webpage is hosted. This is called client-side rendering. In large part this is made possible because of something called the <b>Document Object Model</b> or <b>DOM</b> for short. The <b>DOM</b> is essentially a go-between for your JavaScript 
        code and the actual HTML page through which your site is rendered. Through the <b>DOM</b> we can make reference to and manipulate any one of the HTML elements in our page as well as handle <b>events</b> fired in the user's browser. This allows us to write interactive and engaging websites as opposed to merely serving our users 
        static information.
        <br/>
        <br/>
        See the list of common <b>events</b> that can be fired by our users and handled in our JavaScript code:
        <ul>
          <li>onchange - Some HTML element has been modified</li>
          <li>onclick - An HTML element has been clicked on</li>
          <li>onmouseover - An HTML element was hovered over</li>
          <li>onmouseout - Mouse cursor moves off HTML element</li>
          <li>onkeydown - A keyboard button is pressed</li>
          <li>onload - The HTML page has finished loading</li>
        </ul>
        <br/>
        See an example of the <b>events</b> and how they can be handled below:
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "bGoEyaG"
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
      <br/>
      <br/>
      <CustomTypography variant="p">
        See more on events here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/js/js_events.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/js/js_events.asp
          </CustomTypography>
        </Link>
    </Container>
  );
}

export default Events;