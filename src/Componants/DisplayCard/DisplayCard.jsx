import { React, useState, useEffect, useRef } from "react";
import { DetailsComp, DetailsContainer, ProfileImg, ProfilePage } from "../StyledComponants/StyledComponants";


const DisplayCard = ({ info }) => {

    console.log(info)
    const { headline, id, is_plus, location, personal, sexual } = info
    console.log(headline)

    let SubscriptionStatus = ""

    if (is_plus == false) {
        SubscriptionStatus = "Plus"
    } else {
        SubscriptionStatus = "Regular"
    }

    const target = useRef(null)
    const [hoverState, setHoverState] = useState(false)
    const [focus, setFocus] = useState(false)
    const reveal = hoverState || focus


    return (
        <>




            {/* <h1>
                    {SubscriptionStatus}
                </h1>
                <h1>
                    {is_plus}
                </h1>
                <h1>
                    {id}
                </h1>
                <h1>
                    {is_plus}
                </h1>
                <h1>
                    {location.city}
                </h1>
                <h1>
                    {personal.age}
                </h1>
                <h1>
                    {sexual.safer_sex}
                </h1>
                <h1>
                    {personal.weight.kg}
                </h1> */}


        </>
    )
}

export default DisplayCard