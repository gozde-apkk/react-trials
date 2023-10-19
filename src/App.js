
import './App.css';
import { useEffect, useState } from 'react';
import Main from './layout/Main';
import axios from 'axios';

function App() {

   //data
  const [products , setProducts] = useState([])
useEffect(()=> {
  axios
      .get("https://652d5562f9afa8ef4b2746d9.mockapi.io/product")
      .then((res) => {
        //gelen datayı res.data diyerek çekiyoruz
        console.log("products : >" , res.data);
        setProducts(res.data)
        
      });
},[]);
  return (
    <div className="App">
    
    <Main  products={products} />
     </div>
  );
}

export default App;



/***
 *  <header>
        <Greeting userName={name} userEmail={"ali@com"} userAge={20} />
        <h1>Counter:{counter} </h1>
        <button onClick={() => {
          setCounter (counter +1);
        }} >increase</button>
        <button onClick={() => {
          setCounter(counter -1);
        }}>decrease </button>

      </header>


      <div>
      <h1>Counter Let :{counterLet} </h1>
        <button onClick={() => {
          counterLet ++;
         }} >increase</button>
        <button onClick={() => {
          counterLet --;
        }}>decrease </button>

      </div>
    </div>
 */
