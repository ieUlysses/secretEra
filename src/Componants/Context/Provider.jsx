import { useState } from "react/cjs/react.development"
import MyContext from "./Context"

const MyProvider = (props) => {
    const [ID, setID] = useState("")

    return (
        <MyContext.Provider value={{ ID }}>{props.children}
        </MyContext.Provider>
    )
}
export default MyProvider