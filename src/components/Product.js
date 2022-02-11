import React, { useState, useEffect } from "react";
import Api from '../environment/Apibaseurl';
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom"


const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        await Api.get('/list')
            .then(resp => {
                // console.log(resp.data);
                setData(resp.data);
            })
    }
    return (
        <>
            <div className="container">
                <div className="row">

                    {
                        data.map((item) =>
                            <div className="col-sm-4 mt-4 mb-4" key={item.id}>
                                <Card >
                                    <Card.Img variant="top" src={item.file} className="cardimg" />
                                    <Card.Body>
                                        <Card.Title >{item.name}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text>{item.price}</Card.Text>
                                        {/* <Button variant="primary">Buy Now</Button> */}
                                        <NavLink to={`/product/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Product