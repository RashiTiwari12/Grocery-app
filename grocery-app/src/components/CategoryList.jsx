import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';
import Endpoints from '../api/Endpoints';

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const getData = () => {
        axios.get(Endpoints.CATEGORY_URL)
            .then(response => {
                console.log(response.data.data)
                setCategories(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>CategoryList</h1>
            <div className="row">
                {
                    categories.map((category) => <Category data={category}/>)
                }
  
</div>
        </div>
    )
}
export default CategoryList