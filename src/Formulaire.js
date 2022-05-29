import React, { Component } from 'react'

class Formulaire extends Component {
    render() {
      
  return (
    <div >
        <h1>Formulaire de prise de commandes</h1>
        <p>Veuillez entrer votre commande </p>
        <form onSubmit={this.props.addItem}>
            
            <input type="text" ref = {this.props.inputElement} value={this.props.currentItem.text}
             onChange={this.props.handleInput}></input>
            <input type="submit"></input>
        </form>
    </div>
    
  )
  
}

}
export default Formulaire