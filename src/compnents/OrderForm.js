import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const OrderForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rqst, setRqst] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
    
        setValidated(true);
        event.preventDefault();
        let customerData = {
            name:name,
            email:email,
            request:rqst
        }
        props.confirmOrder(customerData)
      };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleRqst = (e) => {
        setRqst(e.target.value)
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}
        style={{width:"50%", margin:"auto", justifyContent:"center"}}> 
            <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                required
                value={email} onChange={handleEmail}/>
                <Form.Control.Feedback type="invalid" tooltip>
                  {"invalid email adderss"}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" 
                required
                value={name} onChange={handleName}/>
                <Form.Control.Feedback type="invalid" tooltip>
                  {"name is required"}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Request</Form.Label>
                <Form.Control as="textarea" rows="2" 
                value={rqst} onChange={handleRqst}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Order
            </Button>
        </Form>
    )
}
export default OrderForm;