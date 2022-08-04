import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
// const [variable, metodo para actualizarlo] = useState(valor inicial);
const [age, setage] = useState(29);

const birthday = ()=>{
    setage(age +1)
}

    return (
        <div>
                <h1>
                que tal?{props.name} fuuusion
                </h1>
                <h2>
                    Tu edad es de {age}
                </h2>
                <div>
            <button onClick={birthday}>
                birthday
            </button>

                </div>
            </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;
