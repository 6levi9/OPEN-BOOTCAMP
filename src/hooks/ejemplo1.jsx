import React, { useState } from "react";




const Ejemplo1 = () => {

const count = 0;
const person = {
    name: 'Levi',
    email: 'levi88617@gmail.com'
}

const [Count, setCount] = useState(count);
const [Person, setPerson] = useState(person);

function incrementCounter (){
    setCount( Count +1)
}

function nuevaPersona (){
        setPerson({
            name:"lulu",
            email:"lulusupp@gmail.com"
        })
}


    return (
        <div>
            <h1>EJEMPLO DE USESTATE</h1>
            <h2>CONTADOR : {Count} </h2>
            <h2>DATOS DE LA PERSONA </h2>
            <h3>NOMBRE: {Person.name} </h3>
            <h3>EMAIL: {Person.email} </h3>
            <button onClick={incrementCounter}>
            increment counter</button>
            <button onClick={nuevaPersona}>nueva persona</button>
        </div>
    );
}

export default Ejemplo1;
