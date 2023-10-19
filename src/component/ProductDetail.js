


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({product}) => {

    const {productId} = useParams();


    return (
             <div>
                        <img src={product.img} />
                        <h3 >{product.name} </h3>
                        <p>{product.description}</p>
                        <div className='product-price'> Price :{product.price}</div>
                       
                       {product.stock < 4 && product.stock > 0  && (
                        <div className='son-urun' > 
                        <p>Son {product.stock } ürün kaldı</p> 
                        </div>)}
                       
                    </div>
      
    );
}

export default ProductDetail;
