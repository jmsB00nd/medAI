"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import AddNewSessionDialog from "./AddNewSessionDialogue";


function HistoryList() {
    const [historyList, setHistoryList] = useState([])

    return (
        <div className="mt-10">
            {
                historyList.length == 0 ?
                <div className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl border-2">
                    <Image src={"/stethoscope.png"} alt="empty list" width={250} height={250}/>
                    <h2 className="font-bold text-xl mt-2">No Recent Consultations</h2>
                    <p>It looks you haven't consulted with any doctor yet .</p>
                    <AddNewSessionDialog />
                </div>
                : <div>

                </div>
            }
        </div>
    )
}

export default HistoryList;