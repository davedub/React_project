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

        addItem(e) {
            e.preventDefault()
            const {buyItems} = this.state;
            const newItem = this.newItem.value;  
            this.setState({
                buyItems: [...this.state.buyItems, newItem]
                // three dots are "spread attributes" to keep old items already in state 
            })
            this.addForm.reset();
        }       
        render() {
            const {buyItems} = this.state;
            return (
            <div className="container" 	onSubmit={(e) => {this.addItem(e)}}>
            <header>
                <img src={toDoList} class="mx-auto d-block" width="64px" height="64px" />
                <h1 class="row justify-content-md-center">Shopping List</h1>
                <form ref={input => this.addForm = input}  className="form-inline row justify-content-md-center">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="newItemInput">Add New Item></label>
                        <input ref={input => this.newItem = input} type="text" placeholder="Item name" className="form-control" id="newItemInput" />                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

            </header>
            <table className="table">
                <caption>Things to Buy</caption>
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