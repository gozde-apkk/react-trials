


import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './Main.css'
import { Button } from 'reactstrap';

const ProductsPage = ({products}) => {

    //INPUT FİLTERED EXAMPLE

    const [filterText , setFilterText] = useState("");
    const [filteredProducts , setFilteredProducts] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        console.log("Product sayfasından yakalandı:" , products)
    }, [products])

    useEffect(() => {
        console.log("filtertext: " , filterText);
       setFilteredProducts( products.filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase())))
    },[filterText, products])


    return (
        <div>
            <h2><button onClick={()=> {
                nav(-1);
            }}>
                {"<"}
                </button>
                Ürünler Sayfası</h2>
                <Link to="/create-product">Yeni Ürün Ekle</Link>
            
            <hr/>
            <input type='text'onChange={ e => setFilterText(e.target.value)}  ></input>
            <div className='product-container'>
            {filteredProducts.map((product, i) => {
                return  (
                    <div className='product-cart' key={product.id}>
                        <img src={product.img} ></img>
                        <h3 >{product.name} </h3>
                        <p>{product.description}</p>
                        <p> Price :{product.price} </p>
                       
                       {product.stock < 4 && product.stock > 0  && (
                        <div className='son-urun' > 
                        <p>Son {product.stock } ürün kaldı</p> 
                        </div>)}
                        <button disabled={product.stock == 0} >Sepete ekler</button>
                        <Link to='/product-page'>Ürünü incele</Link> 
                        <button onClick={() =>{
                            nav("/product-page/"+ product.id);
                        }}>Detay</button>
                    </div>
                );                       
            })}
            </div>
        </div>
    );
}

export default ProductsPage;
