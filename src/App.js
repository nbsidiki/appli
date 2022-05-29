import Formulaire from "./Formulaire";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import API from "./utils/api";
import axios from 'axios';
import { render } from "@testing-library/react";
import commandeItems from "./commandeItems";
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  
handleInput = e => {
  const itemText = e.target.value
  const currentItem = { text: itemText, key: Date.now() }
  this.setState({
    currentItem,
  })
}
  addItem = async e  => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      try {
      
        const response = await axios.post('http://localhost:3000/api/posts', {posted_data: newItem});
        //console.log(this.currentItem);
        console.log('👉 Returned data:', response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
      this.setState({
        items: items,
        currentItem: { text: ''}
      })
    }
 
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
 
  inputElement = React.createRef()




render(){
  return (
    <div className="App">
      <Formulaire 
       addItem={this.addItem}
       inputElement={this.inputElement}
       handleInput={this.handleInput}
       currentItem={this.state.currentItem}
       />
      <commandeItems entries={this.state.items} deleteItem={this.deleteItem} />
  

    </div>
  );}
  async componentDidMount() {

    let monToken = localStorage.getItem('token');
   const config = {
       headers: { Authorization: `Bearer ${monToken}` }
    };
   
    
      localStorage.setItem('token', "azertyuio");
  
      localStorage.getItem('token');
  
        // Load async data.
        /*let userData = await API.get('/', {
         params: {
           results: 1,
           inc: 'name,email,picture'
         }
       });*/
         //console.log(userData)
   }
}

export default App;
