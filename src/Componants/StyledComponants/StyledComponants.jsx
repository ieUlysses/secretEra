import { React, useState, useEffect, useRef } from "react"

import styled, { css } from "styled-components";
import { Search } from "@styled-icons/bootstrap"
import { Eyeglasses } from "@styled-icons/bootstrap"
import { StatusOnline } from "@styled-icons/heroicons-solid"
import { Moon } from "@styled-icons/bootstrap/"
import { OnlinePrediction } from "@styled-icons/material";
import { Close } from "@styled-icons/evil";

export const Container = styled.div`
display:flex; 
align-items:center;
justify-content:center;
background-image:radial-gradient(grey, #202020, black);
width:100%;
height:100%;
flex-direction:column;
 
`;

/* 
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
 */


export const SearchContainer = styled.div`
align-self:flex-start;
position: relative;
width:50px;
height:50px;
box-sizing:border-box;
border-radius:50px;
border:1px solid lightgray;
padding:5px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
transition:all 0.5s;
width:${(props) => (props.reveal ? "50%" : "50px")};

@media (max-width: 428px){
    
    width:${(props) => (props.reveal ? "50%" : "25px")};
    height:25px;
}
`;


export const SearchBar = styled.input`
    color:white;
    background-color:transparent;
    position:absolute;
    top:0;
    box-sizing:border-box;
    left:0;
    width:100%;
    height:100%;
    line-height:30px;
    outline:0;
    border:0;
    font-size:2rem;
    border-radius:20px;
    margin:0;
    padding: 0 20px;
    appearance: none;   
    display:${(props) => (props.reveal ? "block" : "none")};

@media (max-width: 428px){
    font-size:16px;
}
`;



export const SearchIcon = styled(Search)`
    align-self:flex-end;
    color:pink;
    z-index:10;
`
//Library => userView
export const Grid = styled.div`
    display:grid;
    gap:10px;
    width:max-content;
    
    grid-template-columns: repeat(2, 1fr) ;
    
    
    
background-color:red;

    /* @media (max-width: 428px){
    height:max-content;
    width:max-content;
    grid-template-columns:1fr 1fr ;
    grid-template-rows:1fr 1fr;
    }
    @media (min-width: 428px) and (max-width:828px){
    height:100%;
    //width:100vw;
    grid-template-columns:repeat(3, 1fr) ;
    }

    @media (min-width: 828px) and (max-width:1100){
    height:max-content;
    //width:50vw;;
    grid-template-columns:repeat(6, 1fr) ;
    }

    @media (min-width: 1100px) and (max-width:1800){
    height:max-content;
    //width:max-content;
    grid-template-columns:repeat(8, 1fr) ;
    } */
    `;


//Profile Card
export const CardBody = styled.div`
    height:160px;
    width:150px;
    background-image:radial-gradient( #353535 ,#252525, #1a1a1a);
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
    justify-content:space-between;
    position: relative;
    box-sizing:border-box;
    justify-content:center;
    align-items:center;
`;

export const CardImg = styled.img`
    height: 100px;
    width: 100px;
    border-radius:25px;
    @media (max-width: 800px){
        height:125px;
        width:125px;
    }

`;

export const DateStatus = styled(Eyeglasses)`
    color:pink;
    height:15px;
    width:15px;
    align-self:flex-end;
`

export const OnlineStatus = styled(StatusOnline)`
    color:lightgreen;
    height:15px;
    width:15px;
    align-self:flex-end;
`

export const OfflineStatus = styled(Moon)`
    color:lightslategray;
    height:15px;
    width:15px;
    align-self:flex-end;
`

export const StyledHeader = styled.span`
    font-size: 14px;
    color:grey; 
`

export const CardBtm = styled.div`
    width:98%;
    //background-color:white;
    display:flex;
    //flex-direction:column;
    align-items:center;
    border-radius:5px;
    justify-content:space-between;
    //position: absolute;
    box-sizing:border-box;

`


export const ProfilePage = styled.div`
    height:80vw;
    width:50vh;
    display:flex;
    flex-direction:row;
    border-radius:5px;
    position: relative;
    background-color:red;
    justify-content:space-between;

/*
@media (min-width: 600px) {
    flex-direction:row;
    width: 80%;}
 */
`

export const ProfileImg = styled.img`
background-color:orange;
height:450px;
width:450px;
border-radius:50px;
position: absolute;

`


export const Btn = styled.button`
min-width:100px;
padding:16px 32px;
border-radius:4px;
background-color:#141414;
color: white;
`



export const Background = styled.div`
z-index:10000;
width:100% ;
height:100%;
display:flex;
background-color:white;

justify-content:center;
align-items:center;
position:absolute;


`

export const ModalWrapper = styled.div`
transition:all 0.5s;
width:300px;
height:300px;
background:red;
color:#000;
display:grid;
grid-template-columns:1fr 1fr;

z-index:10000;
border-radius:10px;
`

export const ModalImg = styled.img`
height:100%;
width:100%;
border-radius: 10px 0 0 10px;
background-color:pink;
`

export const ModalContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
line-height:1.8;
color:#141414;

`

export const ModalCloseIcon = styled(Close)`
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
