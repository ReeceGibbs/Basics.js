import React from 'react';
import './App.scss';
import PageLayout from './../PageLayout/PageLayout';
import ReferenceTable from '../ReferenceTable/ReferenceTable';
import Home from '../Home/Home';
import BasicSyntax from './../BasicSyntax/BasicSyntax';
import Events from './../Events/Events';
import JQuery from './../JQuery/JQuery';

//our main App class
class App extends React.Component {

  //our App constructor that we will call to initialise our parent component and set the state for the application
  constructor(props) {

    super(props);

    //we will use the currentPageIndex to determine the content we will be loading in our PageLayout
    this.state = {
      currentPageIndex: 0
    }
  }

  //we define this callback function that can be used to set the current page index from the PageLayout component
  setCurrentPage = (index) => {

    this.setState({
      currentPageIndex: index,
    });
  }

  //we create a list of possible content to populate our PageLayout
  contentList = [
    <Home referenceTable={<ReferenceTable />} />,
    <BasicSyntax />,
    <Events />,
    <JQuery />,
  ];

  render() {

    return (

      <div>
        <PageLayout content={this.contentList[this.state.currentPageIndex]} pageHandler={ this.setCurrentPage } />
      </div>
    );
  }
}

export default App;