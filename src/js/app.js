import React from 'react';
import PropTypes from 'prop-types';
import Popper from 'popper.js';
// import scss from './../styles/app.scss';
import toDoList from '../../src/images/toDoList-512.png';

console.log("Hello from app.js and webpack dev server!!");

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
            <div className="container">
            <header>
                <img src={toDoList} class="mx-auto d-block" width="64px" height="64px" />
                <h1 class="row justify-content-md-center">Shopping List</h1>
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
                            <tr key={item }>
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