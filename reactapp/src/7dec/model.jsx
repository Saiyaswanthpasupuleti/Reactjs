import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>User Info</h4>
        <p>
         User name : {props.user}
        </p>
        <p>
         Mobile Num :{props.mobile}
        </p>
        <p>
         Email : {props.email}
        </p>
        <p>
         Image : <img src={props.photo} alt='imh1' height="200px"></img>
        </p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

