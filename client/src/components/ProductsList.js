import React from 'react';

import { Link } from '@reach/router';

const ProductsList = (props) => {

    return (
        <>
            <h3>All Products</h3>
            {
                props.productsList.products?
                <>
                    {
                        props.productsList.products.map((product, index) => {
                            return (
                                <Link key={index} to={`/${product._id}`}>{product.title}</Link>
                            )
                        })
                    }
                </>:
                ''
            }
        </>
    )
}

export default ProductsList;