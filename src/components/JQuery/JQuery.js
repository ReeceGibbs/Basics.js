import { Container, Link } from '@mui/material';
import React from 'react';
import './JQuery.scss';
import { CustomTypography, AppTheme } from '../../AppTheme';
import EmbeddedCodepen from './../EmbeddedCodepen/EmbeddedCodepen';

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
      <CustomTypography variant="p">
        JQuery is a JavaScript library that was written to make DOM manipulation, event handling and animations easier and more accessible to developers. JQuery has progressively seen declines in popularity over the past for years with 
        the rise of front end frameworks like React, AngularJS, Vue.js etc. However, many existing web applications still use JQuery for many different things and it is therefore an important thing to at least have some familiarity with.
      </CustomTypography>
      <br/>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Using JQuery
      </CustomTypography>
      <CustomTypography variant="p">
        When writing code using JQuery, we should do so within a specific code block that has the following outline: <b>$(document).ready(function() &#123; ... CODE_HERE ... &#125;);</b>. This code block allows us to check to see whether the whole DOM has been loaded and that we will therefore have no issue accessing the elements we would like to.
      </CustomTypography>
      <br/>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Selectors
      </CustomTypography>
      <CustomTypography variant="p">
        When using JQuery we will often need to reference our HTML elements in the DOM. We do this slightly differently to the way we would do this using Vanilla JavaScript.
        <br/>
        <br/>
        Take a look at the list below to see some of the ways we can reference HTML elements:
        <ul>
          <li>$("h1") // element selector</li>
          <li>$("#mainHeading") // ID selector</li>
          <li>$(".yellow") // class selector</li>
          <li>$("*") // selects all HTML elements</li>
          <li>$(this) // selects current HTML element</li>
          <li>$("button") // selects button element</li>
          <li>$("[href]") // selects all link-based elements</li>
        </ul>
        <br/>
        See the example below and don't be afraid to play around with the code:
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "PoJZrEG"
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
        See more on selectors here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/jquery/jquery_ref_selectors.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/jquery/jquery_ref_selectors.asp
          </CustomTypography>
        </Link>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Creating and Adding Elements
      </CustomTypography>
      <CustomTypography variant="p">
        Using JQuery we can create new elements right from our JavaScript code and add them to our HTML at runtime by manipulating the DOM using JQuery.
        <br/>
        <br/>
        See below for a short list of JQuery functions that we can use to manipulate the DOM and add new elements:
        <ul>
          <li>after() - Inserts content after the selected HTML element</li>
          <li>append() - Inserts content at the end of the selected element</li>
          <li>before() - Inserts content after the selected HTML element</li>
          <li>empty() - Removes the child elements from the selected element, but not the element itself</li>
          <li>prepend() - Inserts content at the beginning of the selected element</li>
          <li>text() - sets or returns the text content of the selected element</li>
          <li>val() - Sets or returns the value of a form field</li>
          <li>remove() - Removes the selected element, including its child elements</li>
        </ul>
        <br/>
        See an example of the after() function in effect below. Try replacing the after() function with another and see what happens:
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "yLzedQE"
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
        See more on adding new elements here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/jquery/jquery_dom_add.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/jquery/jquery_dom_add.asp
          </CustomTypography>
        </Link>
        <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Events, Effects and Chaining
      </CustomTypography>
      <CustomTypography variant="p">
        As previously discussed, being able to handle <b>events</b> in JavaScript is incredibly important. This is also possible through JQuery and - in some instances - easier than Vanilla JavaScript. JQuery 
        also offers something called <b>effects</b> this are essentially functions that can be called to animate the elements on you webpage. We can also <b>chain</b> these effects together to perform one after the other.
        <br/>
        <br/>
        A list of common events and effects used in JQuery:
        <ul>
          <li>
            Events:
            <ul>
              <li>
                Mouse Events:
                <ul>
                  <li>Click</li>
                  <li>Double click</li>
                  <li>Mouse enter</li>
                </ul>
              </li>
              <li>
                Keyboard Events:
                <ul>
                  <li>Key press</li>
                  <li>Key down</li>
                  <li>Key up</li>
                </ul>
              </li>
              <li>
                Form Events:
                <ul>
                  <li>Submit</li>
                  <li>Change</li>
                  <li>Blur</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Effects:
            <ul>
              <li>Hide - Hides the selected element</li>
              <li>Show - Reveals the selected element</li>
              <li>Fade - Fades the element in or out</li>
              <li>Slide - Slides the element</li>
              <li>Animate - Animates some property of the element</li>
              <li>Stop - Stops any effect of an element</li>
            </ul>
          </li>
        </ul>
        <br/>
        Take a look at the example below and play around by replacing the handlers with your own handlers:
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "OJxMKWz"
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
          See more on effects and events here:
      </CustomTypography>
        <ul>
          <li>
            <Link 
              href="https://www.w3schools.com/jquery/jquery_ref_effects.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/jquery/jquery_ref_effects.asp
              </CustomTypography>
            </Link>
          </li>
          <li>
            <Link 
              href="https://www.w3schools.com/jquery/jquery_events.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/jquery/jquery_events.asp
              </CustomTypography>
            </Link>
          </li>
        </ul>  
    </Container>
  );
}

export default JQuery;