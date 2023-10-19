import Greeting from '../component/Greeting';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SideMenu from '../component/SideMenu';
import MainPage from '../pages/MainPage';

import CounterPage from './CounterPage';
import ProductsPage from './ProductsPage';

import './Main.css'
import ProductDetailPage from '../pages/ProductDetailPage';
import CreateProductPage from '../pages/CreateProductPage';

const Main = ( {products}) => {
    const [showGreeting , setShowGreeting] = useState(true);
    const [name , setName] = useState('Ali');
    return (
        <div className="main-container">
            <div className="header-container">
            {showGreeting && (
                <Greeting userName={name} userEmail={"ali@com"} userAge={20} /> 
            )}
            <button onClick={() =>{
                setShowGreeting(!showGreeting)
            }} >Toggle Greeting Component</button></div>
            <div className="content-container">
                <div className="left-side-container">
                    <SideMenu/>
                </div>
                <div className="page-container" >
                      <Routes>
                   <Route path="/" element={ <MainPage/>} ></Route>
                    <Route path='/counter' element={<CounterPage/>}/>
                    <Route path='/products' element={<ProductsPage  products={products} />}/>
                    <Route path='/product-page/:productId' element={<ProductDetailPage products={products}   />}/>
                    <Route path='/create-product' element={<CreateProductPage/>}/>
                    </Routes>
                </div>
            </div>
            <div className='footer-container'>Footer area</div>

        </div>
    )
}

export default Main;