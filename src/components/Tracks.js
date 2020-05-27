import React, { Component } from 'react'

class Tracks extends Component {
    state = { playing: false, audio: null }
    playAudio = (previewURL) => () => {
        const audio = new Audio(previewURL)
        if(!this.state.playing) {
            this.setState({playing: true, audio})
            audio.play()
        } else {
            this.state.audio.pause()
            if(this.state.audio.src === audio.src)
                this.setState({playing: false})
            else{
                this.setState({audio})
                audio.play()
            }
                
        }
        
    }

    trackIcon = (track) => {
        if(!track.preview_url){
            return <span>N/A</span>
        }
        if(this.state.playing && this.state.audio.src === track.preview_url){
            return <span>| |</span>
        }
        return <span>&#9654;</span>
    }

    render() {
        const tracks = this.props.tracks
        return (
        <div>
            {
                tracks.map((track) => {
                    const {preview_url} = track
                    return (
                        <div key={track.id} 
                        className='track'
                        onClick={this.playAudio(preview_url)}>
                            <img src={track.album.images[0] && track.album.images[0].url} 
                            className='track-image'
                            alt="No Image"/>
                            <p className='track-text'>{track.name}</p>
                            <p className='track-icon'>{this.trackIcon(track)}</p>
                            <span></span>
                        </div>
                    )
                })
            }
        </div>
        )
    }
}

export default Tracks