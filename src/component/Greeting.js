import { useEffect } from "react";



const Greeting = ({userName, userEmail, userAge}) => {


    useEffect(()=>{
        //ComponentDidMount
        console.log("Component-Did-Mount   Greeting componenti ekrana yüklendi");

        return () => { 
            //component will unmount
            console.log("[COMPONENT_WILL_UNMPOUNT] Greeting componenti ekrandan silindi..")
        }
    },[])

    return (
        <div className="header-div">
            <h1>Merhaba {userName}! Hoşgeldiniz ...</h1>
            <span> ({userEmail} / {userAge})</span>
        </div>
    )
}

export default Greeting;