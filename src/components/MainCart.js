import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from '../redux/actions/index';

const MainCart = () => {
    // we get the state of addItems
    //write the name of file not function
    const state = useSelector(state=> state.addItem)
    const dispatch = useDispatch();
   
    const handleClose = (item) => {
      dispatch(delItem(item));
    }

    const emptyCart = () =>{
        return(
        <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <h2>Your Cart is Empty</h2>
                </div>
        </div>    
        )    
    }

    const proceedBtn = () => {
        return(
            <button className="btn btn-primary float-start"></button>
        )
    }
    return (
        <>   
            {
            state.length == 0? emptyCart():  
            state.map(data => (
             <div className="px-4 my-5 bg-light rounded-3" key={data.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="Close" onClick={()=>handleClose(data)}></button>
                    <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <img src={data.file} alt={data.name} className="insize" />
                    </div>
                    <div className="col-sm-4">
                        <h1>{data.name}</h1>
                    </div>
                    </div>
                </div>    
             </div>    
             ))
            }
            { state.length != 0?
            <div className="text-center">
             <NavLink to = '/checkout' className="btn btn-primary">Proceed to Checkout</NavLink>
             </div>
             :''
            }
            
             
        </>
    )
}

export default MainCart