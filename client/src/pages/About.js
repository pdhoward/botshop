import React                    from "react";
import { Col, Row, Container }  from "../../components/Grid";
import Jumbotron                from "../../components/Jumbotron";
import "./style.css"

const About = () =>
<Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">404 Page Not Found</h1>
              <h1 className="text-center">
                <p>
                  Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
                  gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
                  Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
                  fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
                  euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
                  diam, sit amet facilisis lectus blandit at.
                </p>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        </Container>
  <div>
    <h1>About Page</h1>
    
  </div>;

export default About;
