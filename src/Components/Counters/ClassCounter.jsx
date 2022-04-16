import React from 'react';
import './style.css';

class ClassCounter extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
            this.Increment = this.Increment.bind(this);
            this.Decrement = this.Decrement.bind(this);
            this.Pow = this.Pow.bind(this);
            this.Zero = this.Zero.bind(this);
            this.Fido = this.Fido.bind(this);
            

        }
        //-------------------------------------------
 
        Increment() {
            this.setState({count: this.state.count +1})
        
        }

        Decrement() {
            this.setState({count: this.state.count -1})
        
        }

        Pow() {
            this.setState({count: this.state.count * this.state.count})
        
        }

        Fido() {
            this.setState({count: this.state.count + this.state.count +1})
        
        }

        Zero() {
            this.setState({count: 0})
        
        }
    //-------------------------------------------
    render() {
        return (
            <div className='counter'>
                <div className="text">
                    <h1>{this.state.count}</h1>
                </div>
                <div className="controls">
                    <button onClick = { this.Increment } > Increment </button>  
                    <button onClick = { this.Decrement } > Decrement </button>  
                    <button onClick = { this.Pow } > Pow </button>  
                    <button onClick = { this.Fido } > Fibo </button> 
                    <button onClick = { this.Zero } > Zero </button> 
                </div>
            </div>
        )
    }



}
export default ClassCounter;