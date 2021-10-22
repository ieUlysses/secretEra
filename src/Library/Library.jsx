

import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import ProfileCard from "../Componants/ProfileCard/ProfileCard";
import DisplayCard from "../Componants/DisplayCard/DisplayCard";
import ExpandedData from "./ExpandedData";

import MyContext from '../Componants/Context/Context'


const Users = () => {

    /* const context = useContext(MyContext);
    const { ID } = context;

    console.log(ID) */

    const [users, setUsers] = useState([])
    const url = "http://localhost:3000/api/search?length=32"
    useEffect(() => {
        const fetchData = async () => {
            const user = await axios.get(url)
            console.log(user.data.items)
            setUsers(user.data.items)
            //const picURl = (profiles.data.items[1].picture.url)
            //console.log(picURl)
        }
        fetchData();
    }, [])

    return (
        <>
            <Grid>
                {users.map((user) => (<> <ProfileCard key={user.id} user={user} /> <ExpandedUserData key={user.id} user={user} /> </>))}
            </Grid>
        </>
    )
}


const ExpandedUserData = ({ user }) => {
    //console.log(user)
    const { id } = user
    //console.log(`${id} `)
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
            {infos.map((info) => (<>  <DisplayCard info={info} /> </>))}
        </>
    )
}

const Grid = styled.div`
display:grid;
gap:10px;
height:80vh;
width:80vw;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-template-rows:1fr 1fr 1fr 1fr;
border:2px dotted black;
align-self:center;
`;


export { Users, ExpandedUserData }