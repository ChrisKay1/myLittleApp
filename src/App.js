import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let defaultColor=  '#fff';
let defaultStyle = {
color: defaultColor

}

class Aggregate extends Component {

 

render(){

  return (

    <div style={{width: '40%', display: 'inline-block'}}>

 
  <h1 style={{...defaultStyle}}>Titel number</h1>

</div>
  )

}}


class Filter extends Component {

  render(){


    return(

      <div>

        <img/>
        <input type='text'/>


        </div>



     )
  }
}

class Playlist extends Component {

  render (){

    return (

<div style={{...defaultStyle, width:'20%', display: 'inline-block'}}>

<img/>
<h3>Playlist Name</h3>
<ul><li>Nummer1</li><li>Nummer2</li><li>Nummer3</li><li>Nummer4</li><li>Nummer4</li></ul>


</div>


    )
  }
}





class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Number Text</h1>

        <Aggregate/>
<Aggregate/>
<Filter/>
<Playlist/><Playlist/><Playlist/><Playlist/>


        
      </div>
    );
  }
}

export default App;
