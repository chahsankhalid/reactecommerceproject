import React from "react";
import { Form, Button } from 'react-bootstrap';
const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <img src="./images/images.png" className="contactimg" />
                    </div>
                    <div className="col-sm-6 offset-sm-1">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="my-4">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact