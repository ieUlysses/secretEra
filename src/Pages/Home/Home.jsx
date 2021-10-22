import React from "react";
import { Users } from "../../Library/Library"
import styled from "styled-components";
const Home = () => {
    return (
        <>
            <Container>
                <Users />
            </Container>
        </>
    )
}

const Container = styled.div`
display:flex; 
align-items:center;
justify-content:center;
background-color:blueviolet;
width:98vw;
height:100vh;
 
`;

export default Home