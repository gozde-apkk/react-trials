import { useEffect, useState } from "react"
import CounterDisplay from "./CounterDisplay";
import '../layout/Main.css'


const Counter = () => {
    const [sayac, setSayac] = useState(0);
    const [sayac2, setSayac2] = useState(0);

  /***
   *   useEffect(()=>{
        console.log("Sayaç state güncellendi sayaç:" + sayac)
    },[sayac])

    useEffect(()=>{
        if(sayac2 >sayac){
            setSayac2(sayac)
        }
        console.log("Sayaç 2 state güncellendi sayaç:" + sayac2)
    },[sayac2])


       useEffect(() => {
        console.log("[COMPONENT-DID-MOUNT] Counter componenti monte edildi!");
    },[]);

    useEffect(() => {
        console.log("[COMPONENT-DID-UPDATE] Counter componenti update  edildi!");
    });
   */

 useEffect(() => {
    
 })

    return (
        <div style={{display: "flex"}}>
                <div className="sayac-con">
    
                   <CounterDisplay counter={sayac}/>
                       <button onClick={() => {
                           setSayac(sayac +1)
                       }}>Arttır</button>
                         <button onClick={() => {
                                      setSayac(sayac - 1)
                       }}>Azalt</button>
                           
                </div>
                <div  className="sayac-con">
    
                     <CounterDisplay counter={sayac2}/>
                         <button onClick={() => {
                             setSayac2(sayac2 +1)
                         }}>Arttır</button>
                           <button onClick={() => {
                                        setSayac2(sayac2 - 1)
                         }}>Azalt</button>
                             
                </div>                 
        </div>
    )
}

export default Counter;