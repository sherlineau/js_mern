import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderForm = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const handleSearch = () => {
        navigate(`/${category}/${id}`);
    }

    return (
        <div className='container-sm justify-content-center my-3'>
            <label className='form-text'>Search for: </label>
            <select name='category' value={category} onChange={e => setCategory(e.target.value)} className='form-select'>
                <option hidden>Choose a category</option>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
                <option value='starships'>Starships</option>
            </select>
            <label className='form-text'>ID: </label>
            <input type='text' name='id' value={id} onChange={e => setId(e.target.value)} className='form-control' />
            <div className='d-grid mt-3'>
                <button onClick={handleSearch} className='btn btn-success'>Search</button>
            </div>
        </div>
    )
}

export default HeaderForm