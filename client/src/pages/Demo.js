import React        from "react";
import Cleave       from 'cleave.js/react';

class Demo extends React.Component {
 
    constructor(props, context) {
        super(props, context);
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    }
 
    onCreditCardChange(event) {
        // formatted pretty value
        console.log(event.target.value);
 
        // raw value
        console.log(event.target.rawValue);
    }
 
    onCreditCardFocus(event) {
        // update some state
    }
 
    render() {
        return (
            <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onFocus={this.onCreditCardFocus}
                onChange={this.onCreditCardChange} />
        );
    }
}

export default Demo;