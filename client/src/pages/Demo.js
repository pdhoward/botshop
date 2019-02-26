import React                    from "react";
import Cleave                  from 'cleave.js/react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron               from "../components/Jumbotron";

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
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1 className="text-center">Component Demo</h1>
                  <h1 className="text-center">
                    <Cleave placeholder="Enter your credit card number"
                        options={{creditCard: true}}
                        onFocus={this.onCreditCardFocus}
                        onChange={this.onCreditCardChange} />
                        </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
        );
    }
}

export default Demo;