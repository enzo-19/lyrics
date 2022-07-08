import React from 'react'

const SongArtist = ({artist}) => {
  const {strArtist, strArtistThumb, strBiographyEN, intBornYear, intDiedYear, strGenre, strStyle, strCountry, strWebsite} = artist

  return (
    <div className='song-artist'>
      <div className='info'>
        <img src={strArtistThumb} alt={strArtist}/>
        <div>
          <h3>{strArtist}</h3>
          <p>Genres: {strGenre} - {strStyle}</p>
          <p>Years active: {intBornYear} - {intDiedYear || 'present'}</p>
          <p>Origin: {strCountry}</p>
          {strWebsite && <p>Website: {<a href={`http://${strWebsite}`} target='_blank' rel='noreferrer'>{strWebsite}</a>}</p>}
        </div>
      </div>
      <article>{strBiographyEN}</article>
    </div>
  )
}

export default SongArtist