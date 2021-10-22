import { React, useState, useEffect } from "react"
import axios from "axios"
import DisplayCard from "../Componants/DisplayCard/DisplayCard"


const ExpandedData = ({ user }) => {
    console.log(user)
    const { id } = user
    //console.log(user.id)
    console.log(id)
    const [infos, setInfo] = useState([])

    const uri = `http://localhost:3000/api/profiles?ids=${id}`

    useEffect(() => {

        const fetchData = async () => {
            const info = await axios.get(uri)
            console.log(info.data)
            setInfo(info.data)
        }

        fetchData();

    }, [])

    return (
        <>
            {infos.map((info) => (<DisplayCard info={info} />))}
            <h1>hekko</h1>
        </>
    )
}

export default ExpandedData