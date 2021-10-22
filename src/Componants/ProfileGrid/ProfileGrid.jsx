import { React, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ProfileCard from "../ProfileCard/ProfileCard";
const ProfileGrid = () => {

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
                {users.map((user) => (<ProfileCard key={user.id} user={user} />))}
            </Grid>

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


export default ProfileGrid