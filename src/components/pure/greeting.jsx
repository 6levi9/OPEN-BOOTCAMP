import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
constructor(props){
super(props);
this.state={
    age:20
}
}

    render() {
        return (
            <div>
                <h1>
                que tal?{this.props.name}
                </h1>
                <h2>
                    Tu edad es de {this.state.age}
                </h2>
                <div>
            <button onClick={this.birthday}>
                birthday
            </button>

                </div>
            </div>
        );
    }

    birthday= ()=>{
        this.setState((prevState)=>(
            {
                age: prevState.age+1
            }
        ))
    }
   
}


Greeting.propTypes = { 
   
};


export default Greeting;
