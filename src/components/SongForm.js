import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';



const initialForm = {artist:'', song:''}

const validateForm = form => {
    const errors = {}

    const { artist, song } = form

    if (!artist.trim()) {
        errors.artist = 'Enter artist name'
    }
    if (!song.trim()) {
        errors.song = 'Enter song name'
    }

    return errors
}

const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        const err = validateForm(form)

        setFormError(err)

        if (Object.keys(err).length !== 0) return false

        handleSearch(form)

        setForm(initialForm)
    }


    return (
        <div className='song-form'>
            <form onSubmit={handleSubmit}>
                <div>
                <input className={formError.artist ? 'error' : ''} type='text' name='artist' placeholder='Artist' onChange={handleChange} value={form.artist}/>
                <input className={formError.song ? 'error' : ''} type='text' name='song' placeholder='Song' onChange={handleChange} value={form.song}/>
                {Object.keys(formError).length > 0 && <p>Enter artist and song name</p>}
                </div>
                <button><GoSearch className='icon'/></button>
            </form>
        </div>
    )
}

export default SongForm