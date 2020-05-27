import React, { Component } from 'react'
import Serach from './Search'
import Artist from './Artist'
import Tracks from './Tracks'
import Search from './Search'

const baseURL = 'https://spotify-api-wrapper.appspot.com/artist/'

class App extends Component {
   state = { artist: null,
        tracks: [] 
    }
   searchArtist = (artistQuery) => {
       const artistName = artistQuery
       const url = baseURL + artistName
       fetch(url).then((res) => {
            return res.json()
       }).then((res) => {
           console.log(res)
           const { total, items } = res.artists

           if(total > 0) {
                this.setState({artist: items[0]})
                this.searchTrack()
           } else {
               throw Error('No artist found')
           }
       }).catch((error) => {
           console.log(error)
       })
   }

   searchTrack = () => {
       const artistId = this.state.artist.id
       const url = `${baseURL}${artistId}/top-tracks`
       fetch(url).then((res) => {
           return res.json()
       }).then((res) => {
           console.log(res)
           this.setState({tracks: res.tracks})
       }).catch((error) => {
           console.log(error)
       })
   }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <div>
                    {
                        (this.state.artist) ? (
                            <Artist artist={this.state.artist}/>
                        ):<p></p>
                    }
                    {
                        (this.state.tracks.length > 0) ? (
                            <Tracks tracks={this.state.tracks} />
                        ):<p></p>
                    }
                </div>
            </div>
        )
    }
}

export default App