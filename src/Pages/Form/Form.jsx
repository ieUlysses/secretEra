import { React, useEffect, useState } from "react"
import styled from "styled-components"
import { Modal } from "../../Componants/Modal"
const Form = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <>
            <Container>
                <Btn onClick={openModal} >Click me </Btn>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Container>
        </>
    )
}


const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100vh;
`

const Btn = styled.button`
min-width:100px;
padding:16px 32px;
border-radius:4px;
background-color:#141414;
color: white;
`




export default Form