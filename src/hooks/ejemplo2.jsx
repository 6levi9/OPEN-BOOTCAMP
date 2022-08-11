import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);

const miRef = useRef()


function incrementar1 (){
    setContador1(contador1 +1)
}


function incrementar2 (){
    setContador2(contador2 +1)
}


useEffect(() => {
console.log('CAMBIO DEL ESTADO DEL COMPONENTE')
console.log('Mostrando referencia al elemento del DOM:')
console.log(miRef)
},[contador1, contador2]);


    return (
        <div>
            <h1>EJEMPLOS DE HOOKS</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            <h4 ref={miRef}>
            EJEMPLOS DE ELEMENTOS REFERENCIADOS
            </h4>
            <div>
                <button onClick={incrementar1}>
                    incrementar1
                </button>
                <button onClick={incrementar2}>
                    incrementar2
                </button>
            </div>

        </div>
    );
}

export default Ejemplo2;
