import { ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children: ReactNode
}

type UserContextData={
    name: string 
    surname: string 
    email: string 
    password: string 
}

export const UserContext = createContext({} as UserContextData)


export const UserProvider = ({children}: UserProviderProps)=>{

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <UserContext.Provider 
            value={{
                name, surname, email, password
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

