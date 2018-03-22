const css = require('./../styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
   <div>
   <h1 className="title">Hello, world!</h1>
   <p> Here is some p text rendered in the App component.</p>
   </div>
   )
}
ReactDOM.render(
  <App />,
    document.getElementById('root')
  );
