import Counter from '../component/Counter';
import './Main.css'  
const CounterPage = () => {
    return (

        <div className='sayac-container'>
            <h2>Sayaç Sayfası</h2>
            <hr/>
            <Counter/>
        </div>
    )
}

export default CounterPage;