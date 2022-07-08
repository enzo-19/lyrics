import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'

const SongSearch = () => {

    const [search, setSearch] = useState(null)
    const [lyrics, setLyrics] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const handleSearch = (data) => {
        setSearch(data)
    }

    useEffect(() => {
        if (!search) return;

        const fetchData = async () => {

            try {
                const { artist, song } = search

                let artistURL =`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
                let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`

                setLoading(true)

                const [artistRes, songRes] = await Promise.all([fetch(artistURL), fetch(songURL)])

                const [artistData, songData] = await Promise.all([artistRes.json(), songRes.json()])

                setBio(artistData)
                setLyrics(songData)
                
            } catch (error) {
                setSearch(null)
                setBio(null)
                setLyrics(null)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            }

            setLoading(false)
        }

        fetchData()

    }, [search])

    return (
        <div>
            <SongForm handleSearch={handleSearch}/>
            {loading && <Loader/>}
            {error && <div className='error-msg'>Please try again later</div>}
            {!loading && bio && lyrics && <SongDetails search={search} lyrics={lyrics} bio={bio}/>}
        </div>
    )
}

export default SongSearch