import { React, useEffect, useState, useContext, useRef } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
//import axios from "axios";
import DisplayCard from "../DisplayCard/DisplayCard";
import axios from "axios";
import MyContext from '../Context/Context';
import { ExpandedUserData } from "../../Library/Library";
import { DateStatus, OfflineStatus, OnlineStatus, CardImg, CardBody, StyledHeader, CardBtm, Background, ModalWrapper, ModalImg, ModalContent, ModalCloseIcon } from "../StyledComponants/StyledComponants";
import { SearchBar, SearchContainer, SearchIcon, Grid, Container, Btn } from "../StyledComponants/StyledComponants";
import { Modal } from "../Modal";
import { Close } from "@styled-icons/evil";



const ProfileCard = ({ user }) => {

    const { picture, name, id, online_status } = user
    //const { picture, name, id, online_status } = user;

    const pictures = picture ? (
        <CardImg src={picture.url} alt={picture.comment} />
    ) : (
        // in this URL I would use a fake photo url
        <CardImg src="https://picsum.photos/200" alt="Missing pic" />
    );



    let icon = ""
    switch (online_status) {
        case "OFFLINE":

            icon = <OfflineStatus />

            break;

        case "DATE":
            icon = <DateStatus />


            break;

        default:
            icon = <OnlineStatus />
            break;
    }

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

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>
            <CardBody key={id} onClick={openModal}>
                {pictures}
                <CardBtm>
                    <StyledHeader>{name} </StyledHeader>
                    {icon}
                </CardBtm>
            </CardBody>


            {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        {picture ? (<ModalImg src={picture.url} />) : (null)}
                        <ModalContent>
                            <h1> go </h1>
                        </ModalContent>
                        <ModalCloseIcon aria-label="CloseModal" onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>) : (null)}


        </>
    )

}

//Main Body



export default ProfileCard


