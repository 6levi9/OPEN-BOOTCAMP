import React, {useEffect, useState} from 'react';

const Lifecycle = () => {

const state = {
    fecha:Date(),
    edad: 0,
    nombre: 'Martin',
    apellidos: 'San Jose'
}     

const [persona, setpersona] = useState(state);

const update = ()=>{
    setpersona({
        fecha:Date(),
        edad: persona.edad +1,
        nombre: 'Martin',
        apellidos:'San Jose'
    })
}

useEffect(() => {
    console.log('este creo que es el componentDidMount  ')
    return () => {
        console.log('y este creo que es el componentWillUnmount')
    };
}, []);


    return (
        <div>
           <h2>
            Hora actual: {persona.fecha}
           </h2> 
           <h3>
            {persona.nombre} {persona.apellidos}
           </h3>
        <h2>Edad: {persona.edad}</h2>

        <button onClick={update}>
            cambiar
        </button>


        </div>
    );
}

export default Lifecycle;
