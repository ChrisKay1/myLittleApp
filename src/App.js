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
      songs: [{name:' hund', duration: 1234}, {name: 'katze',duration: 26364}]
      },

      {
      name: 'favs3',
      songs: [{name:' hund', duration: 1234}, {name: 'katze',duration: 26364}]
      },

        {
      name: 'favs4',
      songs: [{name:' hund', duration: 1234}, {name: 'katze',duration: 26364}]
        },

       {
      name: 'favs5',
      songs: [{name:' hund', duration: 1234}, {name: 'katze',duration: 26364}]
          }  
        ] }
}

// first component
class PlaylistCounter extends Component {

render(){

  return (

  <div style={{width: '40%', display: 'inline-block'}}>

 
  <h1 style={{...defaultStyle, color: 'white'}}>{
  
        this.props.playlist.length}Playlists</h1>
                                                 

  </div>
  )

}}


// second component
class HoursCounter extends Component {

render(){

 let allSongs = this.props.playlist.reduce((songs, eachPlaylist) => {

 return songs.concat(eachPlaylist.songs)

 }, [])

    let totalDuration = allSongs.reduce((sum, eachSong) => {

return sum + eachSong.duration


    }, 0  )
  
 return (
  
  <div style={{width: '40%', display: 'inline-block'}}>
  
   
  <h1 style={{...defaultStyle, color: 'white'}}>{Math.round(totalDuration/60)} hours</h1>
                                                   
  
  </div>
    )
  
  }}
  
  

// third component
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
  

// fourth component
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




// the app
class App extends Component {

  constructor() {

super()
   this.state = {serverData: {}}
  }

  componentDidMount () {

    setTimeout (() => {

    this.setState({serverData: fakeServerData});}, 1000);
    }
  
  render() {
    return (
      <div className="App">
      {this.state.serverData.user ?
      <div> 
        <h1 style={{color: 'white'}}>
        {this.state.serverData.user.name}'s playlist</h1>}


        <PlaylistCounter playlist = {this.state.serverData.user &&
this.state.serverData.user.playlist}huhu/>
<HoursCounter playlist = {this.state.serverData.user &&
this.state.serverData.user.playlist}huhu/>
<Filter/>
<Playlist/>
<Playlist/>
<Playlist/>
<Playlist/>

      </div> : <h1>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
