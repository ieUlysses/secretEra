import styled from "styled-components";
import { React, useEffect, useState, useRef } from "react"
import { Close } from "@styled-icons/evil";

export const Modal = ({ showModal, setShowModal, info, pictures }) => {
    console.log(info)
    console.log(pictures)
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>

            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalImg src={pictures} />
                        <ModalContent>
                            <h1>{pictures} </h1>
                            <h1> go </h1>
                        </ModalContent>
                        <ModalCloseIcon aria-label="CloseModal" onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>) : (null)}

        </>
    )
}

const Background = styled.div`

width:100%;
height:100%;
display:flex;
position:fixed;
justify-content:center;
align-items:center;


`

const ModalWrapper = styled.div`
transition:all 0.5s;
width:800px;
height:500px;
background:red;
color:#000;
display:grid;
grid-template-columns:1fr 1fr;
position:relative;
z-index:1000;
border-radius:10px;
`

const ModalImg = styled.div`
height:100%;
width:100%;
border-radius: 10px 0 0 10px;
background-color:pink;
`

const ModalContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
line-height:1.8;
color:#141414;
`

const ModalCloseIcon = styled(Close)`
cursor: pointer;
position:absolute;
top:20px;
right:20px;
width:32px;
height:32px;
padding:0px;
z-index:1000;
color:#fff;
border:none;

`