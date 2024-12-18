import React,{ Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Data extends Component {
    render() {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.image} height="100px" />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">{this.props.price}</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
  export default Data;