/*
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
<h3>{this.props.playlist.name}</h3>
<ul>

  {this.props.playlist.songs.map( song => 
  
  
  
  <li>{song.name}</li>

)}
  
  
  
  </ul>


</div>


    )
  }
}




// the app
class App extends Component {

  constructor() {

super()
   this.state = {serverData: {},
  filterString: ''
  }
  }

  componentDidMount () {

    setTimeout (() => {

    this.setState({serverData: fakeServerData});
  }, 1000);
    

    setTimeout (() => {

      this.setState({filterString: 'hund'});}, 2000);
      }


    
  
  render() {

    let playlistElemets = []

if(this.state.serverData.user) {
for (let i=0; i<this.state.serverData.user.playlist.length; i++){


let playlist = this.state.serverData.user.playlist[i]
  playlistElemets.push(<Playlist playlist={playlist}/>)


}
}
    return (
      <div className="App">
      {this.state.serverData.user ?
      <div> 
        <h1 style={{color: 'white'}}>
        {this.state.serverData.user.name}'s playlist</h1>}


<PlaylistCounter playlist = {this.state.serverData.user.playlist}huhu/>

<HoursCounter playlist = {this.state.serverData.user.playlist}huhu/>

<Filter/>

{playlistElemets}


{this.state.serverData.user.playlist.filter(
playlist =>
playlist.name.includes(this.state.filterString.toLowerCase)

).map(playlist =>

<Playlist playlist={playlist}/>

)}





      </div> : <h1>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;

*/



import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};
let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Hallelujah', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Hej Hej Monika', duration: 70000}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
      .filter(playlist =>
        playlist.name.toLowerCase().includes(
          this.state.filterString.toLowerCase())
    ) : []
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={playlistToRender}/>
          <HoursCounter playlists={playlistToRender}/>
          <Filter onTextChange={text => {
              this.setState({filterString: text})
            }}/>
          {playlistToRender.map(playlist => 
            <Playlist playlist={playlist} />
          )}
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}
export default App;
