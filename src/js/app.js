import React from 'react';
import PropTypes from 'prop-types';
import Popper from 'popper.js';
// import scss from './../styles/app.scss';
import toDoList from '../../src/images/toDoList-512.png';

console.log("Hello from app.js and webpack dev server!!");

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  // simple object containing state of app
             buyItems: ['milk', 'bread', 'fruit'],
             message: ''
            }
        }
        addItem(e) {
            e.preventDefault()
            const {buyItems} = this.state;
            const newItem = this.newItem.value;  

            const isOnTheList = buyItems.includes(newItem);

            if(isOnTheList) {
                this.setState({
                    message: 'this item is already on the list'
                })
            } else
            newItem !== '' && this.setState({
                buyItems: [...this.state.buyItems, newItem]
                // three dots are "spread attributes" to keep old items already in state 
            })

            this.addForm.reset();
        }       
        render() {
            const {buyItems, message} = this.state;
            return (
            <div className="container">
            <header>
                <img src={toDoList} className="mx-auto d-block" width="64px" height="64px" />
                <h1 className="row justify-content-md-center">Shopping List</h1>
                  <form ref={input => this.addForm = input}  className="form-inline row justify-content-md-center" onSubmit={(e) => {this.addItem(e)}} >
                    <div className="form-group row">
                        <label className="sr-only" htmlFor="newItemInput">Add New Item></label>
                        <input ref={input => this.newItem = input} type="text" placeholder="Item name" className="form-control" id="newItemInput" />                    
                    <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </header>
                {
                    message !== '' && <p className="row justify-content-md-center message text-danger warn-message">{message}</p>
                }
            <div className="shopListContainer"> 
            <table className="table table-borderless table-striped table-hover shopListTable">
                <caption>Things to Buy</caption>
                <thead className="table-dark">
                    <tr>
                        <th>Quantity</th>
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
            </div>
        );
    }
}