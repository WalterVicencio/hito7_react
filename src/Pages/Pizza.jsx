import { useEffect, useState } from "react";
import CardPizza from "../CardPizza";

const Pizza = () =>{

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState(false);
    
    useEffect(() => {
        const fetchPizzas = async () =>{
            
            try{
                const url="http://localhost:5000/api/pizzas/";
                const response = await fetch(url);
                const data = await response.json();
                setPizzas(data);
            }catch(error){
                setError(error);
            } finally{
                setLoading(false);
            }

        }
        fetchPizzas();
    }, []);




    return(
        <>
        <div className='cards'>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
                {!loading && pizzas.map((pizza)=>{
                        return(
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img} />
                        )
                    })  }
        </div>
        </>
    )
}



export default Pizza