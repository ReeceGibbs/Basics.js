import { Container, Link } from '@mui/material';
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
      <CustomTypography variant="p">
        Alright! You've found yourself at the first tutorial. Here we will learn the very basics upon which you will build going forward.
      </CustomTypography>
      <br/>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Variables
      </CustomTypography>
      <CustomTypography variant="p">
        The easiest way to think of variables is to think of them as little boxes. We create these boxes so that we can store information in them 
        for quick and easy access at a later stage. We can access the data in these boxes simply by referencing that particular box's name. In many programming languages you are 
        required to define the specific type of data that you are allowed to store in each box, however JavaScript is known as a loosely-typed language 
        which means that we are allowed to store any type of data we like in them. Okay, now that we are familiar with the basic concept of variables we'll retire the whole 'box' 
        analogy and start calling them by their real name, 'variables'.
        <br/>
        <br/>
        There are two ways in which you can create a variable:
        <ul>
          <li>
            We can create the variable and immediately put something in it. This is known as <b>INITIALIZATION</b>.
          </li>
          <li>
            We can create the variable without initially putting anything in it. This is known as <b>DECLARATION</b>. We do this because we know we will need to store something in this variable later, but we are not 
            sure what just yet.
          </li>
        </ul>
        <br/>
        Take a look at the example below. You will notice that one of the two keywords <b>let</b> and <b>const</b> are used in each variable creation. These keywords are used to tell the compiler whether you will be changing 
        the data in the variable at a later stage or not.
        <ul>
          <li><b>let</b> is used when we <i>will</i> be changing the content of our variable at a later stage.</li>
          <li><b>const</b> is used when we <i>will not</i> be changing the content of our variable at a later stage.</li>
        </ul>
        <br/>
        Feel free to go through the example below and play around with the code to see how it changes the live preview.
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
      <br/>
      <br/>
      <CustomTypography variant="p">
        See more on variables here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/js/js_variables.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/js/js_variables.asp
          </CustomTypography>
        </Link>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Conditional Statements
      </CustomTypography>
      <CustomTypography variant="p">
        Often times in programming we will only want to execute certain parts of our code if a particular condition is met. For example, if we have a web page that can be accessed by both members of the page and by guests we 
        might only want to display certain information to members that guests should not be able to see. We can acheive this by using <b>conditional statements</b>. The most common implementation of <b>conditional statements</b> is the <b>if-else</b> implementation.
        <br/>
        <br/>
        There are three possible parts to an <b>if-else</b> statement (although the <b>else</b> and <b>else if</b> parts are optional):
        <br/>
        <ul>
          <li><b>if</b> is the first part of every <b>if-else</b> statement. If the condition set in this portion of the statement is met, the code within the following block will be executed and the flow of control will be passed to the <b>end</b> of the entire conditional statement.</li>
          <li>
            <b>else if</b> can be used to set conditions that will be checked against if the initial condition set in the <b>if</b> statement is <b>not</b> met. You can have as many of these as you want in your conditional statement and as long as none of the conditions preceeding each of 
            these statements is met, the flow of control will continue to be passed down to the next <b>else if</b> statement.
          </li>
          <li><b>else</b> will always be the last condition in your conditional statement. The code in the following block will only be executed if <b>all</b> of the conditions that predeeded it were <b>not</b> met.</li>
        </ul>
        <br/>
        See the example below and feel free to play around with it.
      </CustomTypography>
      <br/>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "YzryJwJ"
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
        See more on conditional statements here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/js/js_if_else.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/js/js_if_else.asp
          </CustomTypography>
        </Link>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Arrays and Loops
      </CustomTypography>
      <CustomTypography variant="p">
        An important part of programming is efficiency. As programmers, we want to write as little code as we possibly can and avoid repeating ourselves as much as possible. 
        One of the ways we can reduce the amount of code we write is by using <b>arrays</b> and <b>loops</b>.
        <br/>
        <br/>
        <b>Arrays</b> are variables that can store many different values of the same type. For example, if we wanted to store 10 different numbers in our code we could go ahead and create 10 separate variables and assign a number to each of them. This would work, but it would be terribly inefficient and rather messy. 
        So what we do instead is create an <b>array</b> and store 10 different numbers in that single variable so that we can access those values at a later stage simply by referencing the array and the <b>index</b> or position of the particular number we are looking for.
        <br/>
        <br/>
        One way that we process data in arrays is by using <b>loops</b>. Again, a <b>loop</b> is a tool of efficiency. To follow on from the example above, if we had an array of 10 different numbers and we wanted to add 2 to each number we could make 10 separate references to each of the numbers in the array and add 2 
        to the value returned by that reference. That might not sound so bad and maybe it isn't, but imagine you weren't dealing with 10 numbers but 100, 1 000 or even 1 000 000 numbers! It would take you a very long time to reference each of those values separately. 
        In these instances we use something called a <b>loop</b>. A <b>loop</b> allows use to iterate through each value or index in an array and manipulate the data at each iteration without having to repeat your code for each value in the array.
        <br/>
        <br/>
        See the example below and feel free to try out some of the following array methods:
        <ul>
          <li>indexOf() - Searches the array for the given element and returns its position</li>
          <li>includes() - Checks if the array contains a given element</li>
          <li>remove() - Removes an item from the list</li>
          <li>pop() - Removes the last element in the array</li>
          <li>push() - Adds an element to the end of the array and returns the new length</li>
          <li>shift() - Removes the first element in the array</li>
          <li>sort() - Sorts elements in the array in ascending order</li>
          <li>splice() - Adds or removes elements in an array</li>
          <li>reverse() - Reverses the order of elements in the array</li>
        </ul>
      </CustomTypography>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "mdBezpZ"
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
        See more on arrays and loops here:
      </CustomTypography>
      <ul>
        <li>
          <Link 
            href="https://www.w3schools.com/js/js_arrays.asp"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <CustomTypography
              color={AppTheme.palette.primary}
            >
              https://www.w3schools.com/js/js_arrays.asp
            </CustomTypography>
          </Link>
        </li>
        <li>
          <Link 
            href="https://www.w3schools.com/js/js_loop_for.asp"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <CustomTypography
              color={AppTheme.palette.primary}
            >
              https://www.w3schools.com/js/js_loop_for.asp
            </CustomTypography>
          </Link>
        </li>
      </ul>  
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Maps
      </CustomTypography>
      <CustomTypography variant="p">
        Similar to arrays, maps are used to store multiple sets of similar data. However, instead of referencing the values in the map by position, we reference them using <b>keys</b>. A <b>key</b> is a unique identifier that is associated to a data <b>value</b>. 
        With the exception of this difference, maps and arrays are functionally identical. Maps are particularly useful for instances where we might not know in exactly which position an array value is. We use a map here so that we can consistently and reliably access 
        the particular data we are looking for.
        <br/>
        <br/>
        See the example below and give some of the following map methods a go:
        <ul>
          <li>has() - checks to see if a key exists in the map and returns a boolean</li>
          <li>get() - returns the value of the given key</li>
          <li>delete() - deletes the given key-value pair from the map</li>
          <li>clear() - removes all key-value pairs in a map</li>
        </ul>
      </CustomTypography>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "poWjqxv"
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
        See more on maps here:
      </CustomTypography>
        <Link 
          href="https://www.w3schools.com/js/js_object_maps.asp"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <CustomTypography
            color={AppTheme.palette.primary}
          >
            https://www.w3schools.com/js/js_object_maps.asp
          </CustomTypography>
        </Link>
      <br/>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        Built-in Functions
      </CustomTypography>
      <CustomTypography variant="p">
        JavaScript has a bunch of different built-in functions that are designed to make a programmers life a lot easier. You would already have seen a few of them being used in the previous examples on this page. For example, <b>trim()</b> which is used to 
        remove leading and trailing spaces from strings. This is just one of hundreds of different built-in functions. These functions do not require any pre-definition and can be used throughout your JavaScript code depending on the context. Each standard JavaScript variable 
        will have a different set of functions for the user to use.
        <br/>
        <br/>
        <CustomTypography variant="p">
          See more on built-in functions here:
        </CustomTypography>
        <ul>
          <li>
            <Link 
              href="https://www.w3schools.com/js/js_string_methods.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/js/js_string_methods.asp
              </CustomTypography>
            </Link>
          </li>
          <li>
            <Link 
              href="https://www.w3schools.com/js/js_number_methods.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/js/js_number_methods.asp
              </CustomTypography>
            </Link>
          </li>
          <li>
            <Link 
              href="https://www.w3schools.com/js/js_array_methods.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/js/js_array_methods.asp
              </CustomTypography>
            </Link>
          </li>
          <li>
            <Link 
              href="https://www.w3schools.com/js/js_date_methods.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/js/js_date_methods.asp
              </CustomTypography>
            </Link>
          </li>
          <li>
            <Link 
              href="https://www.w3schools.com/js/js_date_methods_set.asp"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <CustomTypography
                color={AppTheme.palette.primary}
              >
                https://www.w3schools.com/js/js_date_methods_set.asp
              </CustomTypography>
            </Link>
          </li>
        </ul>  
      </CustomTypography>
      <CustomTypography
        variant="h4"
        color={AppTheme.palette.secondary}
      >
        User-defined Functions
      </CustomTypography>
      <CustomTypography variant="p">
        Let's assume you want to write a program that gives you the product of 4 and 5. This would be easy to accomplish as you could simply multiply 4 and 5 and print the result. Now let's assume you want your program to be able 
        to return the product of any two integers. Given the fact that there are an infinite number of integers this would be relatively hard to accomplish with hard code. For this reason, we use something called <b>user-defined</b> functions. <b>User-defined</b> functions can be used to perform 
        practically any task you can imagine - provided that the programmer is skilled enough. These functions are typically defined using the <b>function</b> keyword and can either return a result or simply
        perform an action and pass the flow of control back to the point from which they were called.
        <br/>
        <br/>
        See an example of user-defined functions below:
        <br/>
      </CustomTypography>
      <br/>
      <EmbeddedCodepen
        userName= "reecegibbs"
        penGuid= "VwMeKWW"
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