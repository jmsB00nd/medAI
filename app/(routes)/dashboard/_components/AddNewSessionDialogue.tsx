"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import { doctorAgent } from "./DoctorAgentCard";
import SuggestedDoctorCard from "./SuggestedDoctorCard";

function AddNewSessionDialog(){

    const [note, setNote] = useState<string>("");

    const [loading, setLoading] = useState(false);

    const [suggedtedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>();

    const onClickNext = async () => {
        setLoading(true)
        const result = await axios.post('/api/suggest-doctor',{
            notes : note
        });
        console.log(result.data)
        setSuggestedDoctors(result.data);
        setLoading(false);
    }

    return(
        <Dialog>
            <DialogTrigger>
                <Button className="mt-3">+ Start a Consultation</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add Basic Details</DialogTitle>
                <DialogDescription>
                    {!suggedtedDoctors?
                        <div>
                        <h2>Add Symptoms or Any Others Details</h2>
                        <Textarea placeholder="Add Details Here ..." onChange={(e)=>setNote(e.target.value)} className="h-[200px] mt-1"/>
                        </div>
                    : <div>
                        <h2>
                            Select the doctor 
                        </h2>
                        <div className="grid grid-cols-3 gap-5">
                        {
                            suggedtedDoctors.map((doctor, index) => (
                                <SuggestedDoctorCard doctorAgent={doctor} key={index}/>
                            ))
                        }
                      </div>
                    </div>
                    }
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'outline'}>Cancel</Button>
                    </DialogClose>
                    {
                        !suggedtedDoctors ? 
                        <Button disabled={!note || loading} onClick={()=> onClickNext()}>
                            Next {loading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                        </Button>
                        :<Button>Start Consultation</Button>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )   
}

export default AddNewSessionDialog