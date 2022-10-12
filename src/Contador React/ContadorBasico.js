import React, { useState } from 'react';
export const Contador = () => {

    const [contador, setContador] = useState(100);

    const [dato, setDato] = useState({dato:''});

    const aumento=() =>{
        setContador(contador +1);
    }
    const menor=() =>{
        setContador(contador -1);
    }
    const reiniciar=() =>{
        let numero = parseInt(dato.numero);
        setContador(numero);
    }
    const iniciar=(event) => {   
        event.preventDefault()
        let numero = parseInt(dato.numero);
        setContador(numero);
    }
    const handleInputchange = (event) => {
        setDato({
            ...dato,
            [event.target.name] : event.target.value
        })
    }

    return <>
        <h1>
        Hola, contador que cuenta cuentas contadas porque cuenta
    </h1>
    
    <form onSubmit={iniciar}>
        <label>Introduce un numero</label><br></br>
        <input type="number" onChange={handleInputchange} name="numero"/>

        <button type='submit'>iniciar</button>
    </form>
    <h2>
        {contador}
    </h2>
    <button onClick={aumento}> +1</button>

    <button onClick={menor}> -1</button>

    <button onClick={reiniciar}> reiniciar</button>
    </>
}


export default Contador; //solo tengo un componente y es el que exportare

