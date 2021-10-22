import { React, useEffect, useState, useContext } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
//import axios from "axios";
import DisplayCard from "../DisplayCard/DisplayCard";
import axios from "axios";
import MyContext from '../Context/Context';


const ProfileCard = ({ user }) => {

    const { picture, name, id, online_status } = user;

    const context = useContext(MyContext);
    const { ID, setID } = context;


    const pictures = picture ? (
        <Link to={`/profileview/${id}`}><CardImg src={picture.url} alt={picture.comment} /></Link>
    ) : (
        // in this URL I would use a fake photo url
        <Link to={`/profileview/${id}`}> <CardImg src="https://picsum.photos/200" alt="Missing pic" /></Link>
    );

    let note = ""
    /*  const Status = (online_status) => { */
    switch (online_status) {
        case "ONLINE":
            note = "red"
            break
        case "OFFLINE":
            console.log("Offilne")
            note = "green"

            break;

        case "DATE":
            console.log("Date")
            note = "yellow"

            break;

        default:
            console.log("none")
            break;
    }







    return (
        <>



            <CardBody key={id} >
                <h1>{name}</h1>
                <span>{pictures}</span>
                <span>{id}</span>
                <span>{note}</span>
            </CardBody>

        </>
    )

}

//Main Body
const CardBody = styled.div`
    height:300px;
    width:200px;
    background-color:red;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const CardImg = styled.img`
    height: 100px;
    width: 100px;

`;


export default ProfileCard