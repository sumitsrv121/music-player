import React from 'react'

const Artist = (props)  => {
    const { name, images, followers, genres } = props.artist

    return (
        <div>
            <img src={images[0] && images[0].url} 
            alt="No Image" 
            style={{ height: 200, width: 200, objectFit: 'cover'}} 
            className='img-circle'/>
            <h3>{name}</h3>
            <span>{genres.join(',')}</span>
            <br/>
            <span>{followers.total} followers</span> 
        </div>
    )
}


export default Artist