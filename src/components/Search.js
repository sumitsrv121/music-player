import React, { Component } from 'react'

class Search extends Component {
    state = { artistQuery: '' }
    updateAtristQuery = (e) => {
       this.setState({artistQuery: e.target.value})
   }

   handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.searchArtist()
        }
   }

   searchArtist = () => {
       this.props.searchArtist(this.state.artistQuery)
   }

    render() {
        return (
            <div>
                <input type='text' placeholder='search for an artist' 
                    onKeyPress={this.handleKeyPress}
                    onChange= {this.updateAtristQuery}/>
                <button className="btn btn-success" style={{margin: 8}} onClick={this.searchArtist}>search</button>
            </div>
        )
    }
}

export default Search