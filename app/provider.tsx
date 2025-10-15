"use client"

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { UserDetailContext } from "@/context/UserDetailContext";

export type UserDetail = {
    name: string,
    email: string,
    credits: number
}

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [userDetail, setUserDetail] = useState<any>();
    const { user, isLoaded } = useUser();
    const hasCreatedUser = useRef(false);
    
    useEffect(() => {
        if (isLoaded && user && !hasCreatedUser.current) {
            CreateNewUser();
            hasCreatedUser.current = true;
        }
    }, [isLoaded, user?.id]); 

    const CreateNewUser = async () => {
        try {
            const result = await axios.post("/api/users");
            console.log(result.data);
            setUserDetail(result.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}

export default Provider