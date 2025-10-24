import { openai } from "@/config/openaiModel";
import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req : NextRequest) {
    const {notes} = await req.json()
    try {
        const completion = await openai.chat.completions.create({
            model: "openai/gpt-oss-20b:free",
            messages: [
                {"role" : "system", content : JSON.stringify(AIDoctorAgents)},
                {"role": "user", "content": "User Notes/Symptoms :"+notes+", Depends on ther user notes and sympytomps Please suggest a list of doctor return obeject in JSON only"}
            ],
        });

        const rawResp = completion.choices[0].message.content;
        //@ts-ignore
        const Resp = rawResp.trim().replace("```json","").replace("```","")
        const JSONResp = JSON.parse(Resp);
        return NextResponse.json(JSONResp);
    } catch (error) {
        return NextResponse.json(error);
    }
} 