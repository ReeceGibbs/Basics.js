import React from 'react';
import PropTypes from 'prop-types';
import './EmbeddedCodepen.scss';

//this is the custom component we are writing to make it easy to fetch and embed codepens
function EmbeddedCodepen(props) {

  //our embed url that we will build upon with our information
  const srcUrl = [
    'https://codepen.io/',
    props.userName,
    '/embed/',
    props.penGuid,
    '?default-tab=',
    props.defaultTab,
    '%2Cresult&editable=',
    props.editable,
    '&theme-id=',
    props.theme
  ].join('');

  return (
    <iframe 
    height={props.height}
    style={{ width: props.width }} 
    scrolling={props.scrolling}
    title={props.title} 
    src={srcUrl}
    frameborder={props.frameborder} 
    loading={props.loading} 
    allowtransparency={props.allowtransparency} 
    allowfullscreen={props.allowfullscreen}
  />
  );
}

//our default props and prop types to make sure that the user enters the right info in the right way
EmbeddedCodepen.propTypes = {
  userName: PropTypes.string,
  penGuid: PropTypes.string,
  defaultTab: 'js' | 'html' | 'css',
  editable: PropTypes.string,
  theme: 'dark' | 'light',
  height: PropTypes.string,
  width: PropTypes.string,
  scrolling: 'yes' | 'no',
  title: PropTypes.string,
  frameborder: 'yes' | 'no',
  loading: 'lazy',
  allowtransparency: PropTypes.string,
  allowfullscreen: PropTypes.string,
};

EmbeddedCodepen.defaultProps = {
  userName: 'reecegibbs',
  penGuid: 'eYGNOPP',
  defaultTab: 'html',
  editable: 'false',
  theme: 'dark',
  height: '300',
  width: '100%',
  scrolling: 'no',
  title: 'Hello friend...',
  frameborder: 'no',
  loading: 'lazy',
  allowtransparency: 'true',
  allowfullscreen: 'true',
};

export default EmbeddedCodepen;
