/**
* ReactJS has built-in state of Object.
* The state is where you store property value belong the component.
* When the object state is changed, the component is re-render
*/

import React from 'react';
class TestState extends React.Component {
    //1. Constructor
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Vinfast',
            model: 'VF3',
            color: 'pink',
            price: 13000
        }
    }
    //2. Render
    render() {
        return (
            <>
                <h1>Example 04: State</h1>
                    <div>+ Brand: {this.state.brand}</div>
                    <div>+ Model: {this.state.model}</div>
                    <div>+ Color: {this.state.color}</div>
                    <div>+ Price: {this.state.price}</div>
                    <p />
                <hr align='left' width='50%' />

            </>
        );
    }
}


export default TestState;
