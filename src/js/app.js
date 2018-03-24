import React from 'react';
import PropTypes from 'prop-types';


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {   // a simple object containing the state of the app
             buyItems: ['milk', 'bread', 'fruit']
            }
        }
        render() {
            const {buyItems} = this.state;
            return (
            <div>
                <h1>Shopping List</h1>
                {
                buyItems.map(item => {
                        return <p key={item}>{item}</p>
                })
            }
            </div>
            )
        }
    }
