import React, { Component } from 'react'
import Car from './Car'
class Form extends Component {
    state = {
        username: '',
        color:'',
        colors:["", "red", "blue", "green", "black", "pink"],
        comment:''
    }
    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = event =>{
        // console.log(event);
        this.setState({
            color: event.target.value
        })
    }
    handleComments  = event =>{
        
        this.setState({
            comment: event.target.value})
    } 

    handleSubmitForm = e => {
        e.preventDefault();
console.log(`username: ${this.state.username} couleur: ${this.state.color} commentaire: ${this.state.comment}`);
    }

    render() {
        return (
            <div>
                <Car color={this.state.color} height="400" />
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label> Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>

                    <div>
                       <label>Couleur</label> 
                       <select value={this.state.color} onChange={this.handleColor}>
                        {
                            this.state.colors.map((color,index)=> {
                                return <option key={index} value={color}>{color}</option>
                            })
                        }
                       </select>
                    </div>

<div>
    <label>commentaire</label>
    <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
</div>

<button>Valider</button>

                </form>
            </div>
        )
    }
}

export default Form;

