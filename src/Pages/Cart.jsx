import {useContext, useState } from "react"
import CardPizza from "../CardPizza"
import { ListaPizzas } from "../pizzas"
import { CartContext } from "../Context/CartContext"


const Cart = () => {


    //const { carta, setCarta } = useContext(CartContext);

    const {carta, setCarta} =useContext(CartContext);

    const {total, setTotal} =useContext(CartContext);



    return (
        <>
        <div>
            <hr />
            <hr />
            <hr />
            <h3>Carrito de Compras</h3>

            <div className='cards'>
                {carta.map ( pizza =>(
                    <div>
                        <CardPizza
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        />
                        <h5>Cantidad: {pizza.cantidad}</h5>
                        <button className="btn btn-danger" onClick={()=>{
                            const disminuir_cantidad1=carta.filter(el => el.id===pizza.id)
                            disminuir_cantidad1[0].cantidad-=1;
                            const disminuir_cantidad2=carta.filter(el => el.id!==pizza.id)
                            disminuir_cantidad1[0].cantidad ==0 ? setCarta([...disminuir_cantidad2]) : setCarta([...carta]);
                            setTotal(total-pizza.price)
                        } }>Eliminar</button>
                    </div>
            )
            )}  

            </div>
            <hr />
            <hr />
            <hr />
            <div>
                    <h3>Total: $ {total} </h3>
                    <button className="btn btn-success mb-5">Pagar</button>
                    </div>
        </div>

        <div className='cards'>
        {ListaPizzas.map ( pizza =>(
            <div>
            <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />

            <button className="btn btn-info" onClick={()=>{
                const aumentar_cantidad=ListaPizzas.filter(el => el.id===pizza.id)
                pizza.cantidad >0 ? setCarta([...carta]) : setCarta([...carta,aumentar_cantidad[0]]);
                aumentar_cantidad[0].cantidad+=1;
                setTotal(total+pizza.price)
            } }>Agregar</button>
            </div>
            ))}  
        </div>
        
        </>
    )
}

export default Cart