import React, { Component } from 'react';
import './App.css';


let defaultColor=  '#fff';
let defaultStyle = {
color: defaultColor
}
let fakeServerData = {

  user: {

    name: 'David',

    playlist: [
      {
      name: 'favs2',
      songs: ['hund','katze', 'maus']
      },

      {
        name: 'favs3',
        songs: ['hund','katze', 'maus']
      },

        {
          name: 'favs4',
          songs: ['hund','katze', 'maus']
        },

       {
            name: 'favs5',
            songs: ['hund','katze', 'maus']
          } 

        
        ]

          
        }
}

class Aggregate extends Component {

 

render(){

  return (

    <div style={{width: '40%', display: 'inline-block'}}>

 
  <h1 style={{...defaultStyle, color: 'white'}}>{this.props.playlist &&
  
                                                 this.props.playlist.length}Hallo</h1>
                                                 console.log(this.props.playlist;)

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

  constructor() {

super()
   this.state = {serverData: {}}
  }

  componentDidMount () {

    this.setState({serverData: fakeServerData})

  }
  render() {
    return (
      <div className="App">
        <h1 style={{color: 'white'}}>{this.state.serverData.user &&
        this.state.serverData.user.name}'s playlist</h1>

        <Aggregate playlist = {this.state.serverData.user &&
this.state.serverData.user.playlist}huhu/>
<Aggregate playlist = {this.state.serverData.user &&
this.state.serverData.user.playlist}huhu/>
<Filter/>
<Playlist/>
<Playlist/>
<Playlist/>
<Playlist/>


        
      </div>
    );
  }
}

export default App;
