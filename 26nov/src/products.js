import Accordion from 'react-bootstrap/Accordion';
function Products(props){

    return(
        <>
        <div style={{}}>
        {console.log(props.data)}
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <strong>Item no {props.data.id}</strong></Accordion.Header>
        <Accordion.Body>
        <img src={props.data.image} alt='images1' height="100px"></img>
         <h5> <strong>Title : </strong>{props.data.title}</h5>
         <p> <strong>Description : </strong>{props.data.description}</p>
         <p> <strong>Category : </strong>{props.data.category}</p>
         <p> <strong>Price :</strong> ${props.data.price}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
       
        </>
    )

}
export default Products;