import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

import axios from 'axios';

const Main = () => {
    const [productsList, setProductsList] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProductsList(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(productsList);

    return (
        <div>
            <ProductForm/>
            <ProductsList productsList={productsList}/>
        </div>
    )
}

export default Main;