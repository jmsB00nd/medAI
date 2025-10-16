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
import { ArrowRight } from "lucide-react";


function AddNewSessionDialog(){
    const [note, setNote] = useState<string>();
    return(
        <Dialog>
            <DialogTrigger>
                <Button className="mt-3">+ Start a Consultation</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add Basic Details</DialogTitle>
                <DialogDescription>
                    <div>
                        <h2>Add Symptoms or Any Others Details</h2>
                        <Textarea placeholder="Add Details Here ..." onChange={(e)=>setNote(e.target.value)} className="h-[200px] mt-1"/>
                    </div>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'outline'}>Cancel</Button>
                    </DialogClose>
                    <Button disabled={!note}>Next <ArrowRight /></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )   
}

export default AddNewSessionDialog