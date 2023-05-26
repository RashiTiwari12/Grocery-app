import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../api/Endpoints';
import { useParams } from 'react-router-dom';

const SubCategory = () => {
    const {catId} = useParams();
    const [subCategories, setSubCategories] = useState([])
    const getData = () => {
        axios.get(Endpoints.SUBCATEGORY_BY_CATID_URL+catId)
            .then(response => setSubCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [catId])


    return (
        <div>
            <h2 className="text-center">Sub-Category</h2>
            <ul className="list-group">

                {
                    subCategories.map((item) => <li className="list-group-item">{item.subName}</li>)
                }
            </ul>
        </div>
    )
}
export default SubCategory
