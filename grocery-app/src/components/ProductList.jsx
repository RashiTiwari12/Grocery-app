import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Endpoints from '../api/Endpoints';
import Product from './Product';


const ProductList= ()=>{
    const {catId }=useParams();
    const[products, setProducts] = useState([])
    const getData =() =>{
        axios.get(Endpoints.PRODUCT_BY_CATID_URL + catId)
        .then(response => setProducts(response.data.data))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        getData();
    },[catId])
    return(
        <div>
            <h2 className="text-center">All Products</h2>
            <div class="row">
 {
    products.map((product)=> <Product data={product}/>)
 }
  
</div>
        </div>
    )
}
export default ProductList