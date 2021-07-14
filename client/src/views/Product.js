import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Product = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    console.log(product)
    return (
        <>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </>
    )
}

export default Product;