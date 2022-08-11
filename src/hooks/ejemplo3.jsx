import React, {useState, useContext} from 'react';
import '../style/ejemplo3.scss'

const miContexto = React.createContext(null)


const Componente1 = () => {

    const state = useContext(miContexto);


    return (
        <div className='componente1'>
            
        <h1>El toquen es: {state.token}</h1>
        <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}


const MiComponenteConContexto = () => {
    let numero = Math.random()
    const estadoInicial = {
        token:numero,
        sesion:1
    }

    const [sesionData, setSesionData] = useState(estadoInicial);


const actualizarSesion = ()=>{
    let numero2 = Math.random()
    setSesionData({
        token:numero2,
        sesion:sesionData.sesion +1     


    })
}
    return (
        <miContexto.Provider value={sesionData} className='main-component'>
        <h1>EJEMPLO DE USECONTEXT</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion} className = 'boton'>
            actualizar sesion
        </button>
        </miContexto.Provider>


    );
} 

export default MiComponenteConContexto;

