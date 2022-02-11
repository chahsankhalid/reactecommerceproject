import React from 'react';
import { Button, Modal,Form } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
// import { BsCartFill } from "@react-icons/all-files/fa/FaBeer";

const Cart = () =>{
    // we get the state of addItems
    //write the name of file not function
    const state = useSelector((state)=> state.addItem)
    return(
        <>
            <Button variant="primary" className="marginleft">
            <BsFillCartFill /><NavLink to ='/cart' variant="primary" className="marginleft white">Cart({state.length})</NavLink>
            
            </Button>
        </>
    )
}

export default Cart;