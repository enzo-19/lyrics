import React from 'react'

const SongLyrics = ({title, lyrics}) => {
  return (
    <div className='song-lyrics'>
      {
        lyrics.lyrics ?
        <>
          <h3>{title}</h3>
          <blockquote>
            {lyrics.lyrics}
          </blockquote>
        </>
        :
        <p>No lyrics found</p>
      }
    </div>
  )
}

export default SongLyrics