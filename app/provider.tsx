"use client"

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { UserDetailContext } from "@/context/UserDetailContext";


export type UserDetail = {
    name : string,
    email : string,
    credits : number
}

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [userDetail, setUserDetail] = useState<any>();
    const user  = useUser();
    const ranRef = useRef(false);
    useEffect(()=>{
        if (!user || ranRef.current) return;
        ranRef.current = true;
        CreateNewUser();
    }, [user])

    const CreateNewUser = async () => {
        const result = await axios.post("/api/users");
        console.log(result.data);
        setUserDetail(result.data);
    }

    return (
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
            <div>{children}</div>
        </UserDetailContext.Provider>
        
    )
}

export default Provider 