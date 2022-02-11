import React,{ useState, useEffect } from "react";
import Api from '../environment/Apibaseurl';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions";

const ProdctDetail = () => {
    const prodid = useParams();
    const [certBtn, setcertBtn] = useState('Add to Cart')
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await Api.get('/list')
            .then(resp => {
                setData(resp.data);
            })
        }
        const proDetail = data.filter(item=>item.id == prodid.id);
        const product = proDetail[0];
        // console.log(product)

        const dispatch = useDispatch();
        const handleCart =(product) =>{
            if(certBtn == 'Add to Cart'){
                dispatch(addItem(product));
                setcertBtn('Remove from Cart');
            }
            else{
                dispatch(delItem(product));
                setcertBtn('Add to Cart')
            }
        }
  return (
      
      <>
        <div className="container" key={product.id}>
            <div className="row">
                <div className="col-sm-6">
                    <img src={product.file} alt={product.name} className="Productdetailimg"/>
                </div>
                <div className="col-sm-6">
                    <h1>{product.name}</h1>
                    <hr />
                    <h2>{product.price}</h2>
                    <p>{product.description}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-primary">{certBtn}</button>
                </div>
            </div>
        </div>
      </>
  )
}

export default ProdctDetail;