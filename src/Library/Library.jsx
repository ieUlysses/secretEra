import { React, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import ProfileCard from "../Componants/ProfileCard/ProfileCard";
import DisplayCard from "../Componants/DisplayCard/DisplayCard";

//custom styled componants 
import { SearchBar, SearchContainer, SearchIcon, Grid, Container } from "../Componants/StyledComponants/StyledComponants";



const UserView = () => {

    const [users, setUsers] = useState([])

    const target = useRef(null)
    const [hoverState, setHoverState] = useState(false)
    const [focus, setFocus] = useState(false)
    const reveal = hoverState || focus

    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)

    }
    console.log(search)

    useEffect(() => {
        target.current.value = ""
    }, [hoverState])


    const url = "http://localhost:3000/api/search?length=32"
    useEffect(() => {
        const fetchData = async () => {
            const user = await axios.get(url)
            console.log(user.data.items)
            setUsers(user.data.items)
        }
        fetchData();
    }, [url])



    return (
        <>



            <Container>

                <SearchContainer
                    onMouseEnter={() => setHoverState(true)}
                    onMouseLeave={() => setHoverState(false)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    reveal={reveal}
                >

                    <SearchBar ref={target} reveal={reveal} onChange={handleSearch} />
                    <SearchIcon />
                </SearchContainer>


                <Grid>
                    {users.map((user) => (<> <ProfileCard key={user.id} user={user} />  </>))}
                </Grid>
            </Container>


        </>
    )
}


const ExpandedUserData = () => {

    const { id } = useParams()
    console.log(id)

    const [detailedInfo, setDetailedInfo] = useState([])
    const uri = `http://localhost:3000/api/profiles?ids=${id}`
    useEffect(() => {
        const fetchData = async () => {
            const info = await axios.get(uri)
            console.log(info.data)
            setDetailedInfo(info.data)
        }
        fetchData();
    }, [uri])


    //console.log(id)
    return (
        <>

            {detailedInfo.map((info) => (<> <DisplayCard key={id} info={info} />  </>))}


        </>
    )
}



export { UserView, ExpandedUserData }