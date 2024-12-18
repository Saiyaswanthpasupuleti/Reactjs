import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Bcard(props) {
  const nav=useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Card </Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Button variant="primary">price :{props.price}</Button>
  
  <Button variant="danger" onClick={()=>nav("/home")}>Home</Button>
  <Button variant="primary" onClick={()=>nav("/products")}>Back</Button>
        </div>
      
      </Card.Body>
    </Card>
  );
}

export default Bcard;