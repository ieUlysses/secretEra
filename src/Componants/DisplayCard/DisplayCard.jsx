import { React, useState, useEffect } from "react";

const DisplayCard = ({ info }) => {

    console.log(info)
    const { headline } = info
    console.log(headline)
    return (
        <>
            <h1>
                <h1>{headline}</h1>
            </h1>
        </>
    )
}

export default DisplayCard