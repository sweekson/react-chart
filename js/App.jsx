import React from 'react';
import Workspace from './components/Workspace';

class App extends React.Component {
  render() {
    return (
    	<div className="container-fluid">
		    <div className="row-fluid">
		      <div className="span12">
            <Workspace />
		      </div>      
		    </div>
		  </div>
    	)
  }
}

module.exports = App;
