import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
    return <h1 className="title">Welcome to the world of React!!</h1>
}

const Greeting = (props) => {
    const {name, age} = props;
    return <p>This greeting is for {name} who is {age} years old.</p>
}

export const App = () => {
    return (
     <div>
     <Headline />   
     <Greeting name="Steve" age={36} /> 
     </div>
     )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
