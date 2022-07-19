import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateFormUpdate from '../components/CreateFormUpdate'
import DisplayTable from '../components/DisplayTable'

const Main2 = () => {
    const [songlist, setSonglist] = useState([])

    // method to refresh table
    // copies songList and adds newSong to props
    // components refresh when props is updated -> does not need to go to backend
    const refreshList = (newSong) =>{
        setSonglist([...songlist, newSong])
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSonglist(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <CreateFormUpdate updateList={refreshList}/>
            <DisplayTable songlist={songlist} />
        </div>
    )
}

export default Main2