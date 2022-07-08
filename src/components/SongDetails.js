import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({search, lyrics, bio}) => {
  return (
    <div className={`song-details ${!lyrics.lyrics ? 'no-lyrics' : ''}`}>
        <SongLyrics title={search.song} lyrics={lyrics}/>
        {bio.artists && <SongArtist artist={bio.artists[0]}/>} 
    </div>
  )
}

export default SongDetails