import { useContext } from "react"
import { UserContext } from "../../context/user"

export const User = ()=>{
    const {
        name, surname, email, password
    } = useContext(UserContext)

    return(
        <>
            <input type="text"
                value={name}
                
            />
        </>
    )
}