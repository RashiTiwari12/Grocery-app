import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Endpoints from '../api/Endpoints';
import Constants from '../api/Constants';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/actions/cart-actions';

const ProductDetailPage =() =>{
    const dispatch = useDispatch();
    const {id} =useParams()
    const [productDetail, setProductDetail]= useState({})
    const fetchData =() =>{
        axios.get(Endpoints.PRODUCT_BY_ID_URL+id)
        .then((response)=>setProductDetail(response.data.data))
        .catch((error) => console.log(error))
    }
    useEffect(() =>{
        fetchData()
    },[id])

    const onClickHandler =()=>{
     dispatch(addToCart(productDetail))
    }
    return(
<>
<Navbar/>
<div className='container'>
    <div className="wrapper">
    <div className='row'>
        <div className='col-md-6'>
            <img src={Constants.IMAGE_URL+productDetail.image} alt="" className="img-fluid" />
        </div>
        <div className='col-md-6'>
            <h5>{productDetail.productName}</h5>
            <p>{productDetail.unit}</p>
            <p>{productDetail.description}</p>
            <h2>
                <span>&#8377;</span>{productDetail.price}
                <span style={{fontSixe: '22px', marginLeft: '10px', color:'#888'}}></span>
                <del> <span>&#8377;</span>{productDetail.mrp}</del>
            </h2>
            <button onClick={onClickHandler} className="btn btn-primary">Add to cart</button>
            {/* <Link to={'/products/detail/'+id} className="btn btn-primary btn-block" >Add to cart</Link> */}
        </div>
    </div>
</div>
</div>
</>
    )
}
export default ProductDetailPage