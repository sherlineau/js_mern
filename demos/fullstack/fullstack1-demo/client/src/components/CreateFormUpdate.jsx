import React, { useState } from 'react'
import axios from "axios"

// 1. input: useState
// 2. axios
// optional: redirect: useNavigate

const CreateFormUpdate = (props) => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)

    const handleSubmit = (e) => {
        e.preventDefault()
        // post the new song to the backend
        axios.post(`http://localhost:8000/api/songs`, { title, artist, rating })
            // list does not get updated -> cannot use redirect to main
            // 
            .then(res => props.updateList(res.data))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend> CreateFormUpdate.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title </label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Artist </label>
                    <input type="text" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div>
                    <label> Rating </label>
                    <input type="number" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <button type="submit"> Create new song</button>
            </form>
        </fieldset>
    )
}

export default CreateFormUpdate