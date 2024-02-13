import { NextResponse } from "next/server";
import OpenAI from "openai"

const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(
    req: Request
){
    try {
        
    } catch (error) {
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal error", {status:500});
    }
}