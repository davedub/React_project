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
            <header>
                {/* <img src={image} /> */}
                <h1>Shopping List</h1>
            </header>
            <table className="table">
                <caption>Shopping List</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>  
                <tbody>         
                    {
                    buyItems.map(item => {
                        return (
                            <tr key={item}>
                                <th scope="row">1</th>
                                <td>{item}</td>
                                <td>Button</td>
                            </tr> 
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        );
    }
}