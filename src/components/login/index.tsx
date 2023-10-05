import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/user"
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcHighPriority, FcApproval } from "react-icons/fc";

interface LoginProps{
    localName: string
    localSurname: string
    localEmail: string
    localPassword: string
}

export const Login =()=>{
    const {
        name, surname, email, password
    } = useContext(UserContext)

    const [localName, setLocalName] = useState(name)
    const [localSurname, setLocalSurname] = useState(surname)
    const [localEmail, setLocalEmail] = useState(email)
    const [localPassword, setLocalPassword] = useState(password)

    const [userData, setUserData] = useState<LoginProps>()

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword)
    }

    const handleShowUser = ()=>{
       let newUser = {
        localName: localName,
        localSurname: localSurname,
        localEmail: localEmail,
        localPassword: localPassword
       }

       setUserData(newUser)

       console.log(userData)

       setLocalName('')
       setLocalSurname('')
       setLocalEmail('')
       setLocalPassword('')
    }

    const handleValidUser =()=>{
        return(
            localName.length >= 5 &&
            localSurname.length >= 5 &&
            localEmail.length >= 5 &&
            localPassword.length >= 5
        )
    }

    useEffect(() => {
        console.log(userData);
      }, [userData]);

    return(
        <>
            {localName.length < 5 ?
                 <FcHighPriority/>: <FcApproval/>
            }
           <input 
                type="text"
                placeholder="nome..."
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
            /> 
            {localName.length < 5 ?
                 <FcHighPriority/>: <FcApproval/>
            }
            
            <br />
           
            {localSurname.length < 5 ?
                 <FcHighPriority/>: <FcApproval/>
            }
           <input 
                type="text"
                placeholder="apelido..."
                value={localSurname}
                onChange={(e)=>setLocalSurname(e.target.value)}
            /> 
            {localSurname.length < 5 ?
                 <FcHighPriority/>: <FcApproval/>
            }
            
            
            <br />
           
            {localEmail.length < 5  ?
                <FcHighPriority/>: <FcApproval/>
            }
           <input 
                type="email"
                placeholder="e-mail..."
                value={localEmail}
                onChange={(e)=>setLocalEmail(e.target.value)}
            />
            {localEmail.length < 5  ?
                <FcHighPriority/>: <FcApproval/>
            }

             <br />
           
             {localPassword.length < 5  ?
                <FcHighPriority/>: <FcApproval/>
            }
           <input 
                type={showPassword ? "text": 'password'}
                placeholder="senha..."
                value={localPassword}
                onChange={(e)=>setLocalPassword(e.target.value)}
            /> 
            
            
            <a onClick={handleShowPassword}>
                {showPassword ?<BsEyeSlash/>: <BsEye/> }
            </a> 
            <br /><br />
            <button disabled={!handleValidUser()} onClick={handleShowUser}>cadastrar</button>

            <hr />
            <br />
            <br />

            <strong>{userData?.localName}</strong><br />
            <strong>{userData?.localSurname}</strong><br />
            <strong>{userData?.localEmail}</strong>
            
        </>
    )
}