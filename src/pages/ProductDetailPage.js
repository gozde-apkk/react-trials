



import React, { useEffect, useState } from 'react';
import ProductDetail from '../component/ProductDetail';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailPage = ({products}) => {

    //URL parameters
    const {productId} = useParams();

    //state parametres
    const [product , setProduct] = useState({});
    const nav = useNavigate();


    //id ye göre product çekilecek
    useEffect(() => {
        setProduct(products.find((p) => p.id === productId));
    },[products, productId])



    return (
        <div>
            <h2>
            <button onClick={()=> {
                nav(-1);
            }}>
                {"<"}
                </button>Product Detail</h2>
            <hr/>
            <ProductDetail product={product} />
        </div>
    );
}

export default ProductDetailPage;
