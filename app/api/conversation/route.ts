import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai"

import { increaseAPILimit, checkApLimit } from "@/lib/api_limits";

const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(
    req: Request
){
    try {
        const {userId} =auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse('Unauthorized',{status:401});
        }

        if (!openai){
            return new NextResponse('OpenAI TOKEN KEY NOT CONFIGURED',{status:500})
        }

        if (!messages){
            return new NextResponse('Message Required',{status:400});
        }

        const freeTrial = await checkApLimit();

        if(!freeTrial){
            return new NextResponse('Free trial expired', {status:403});
        }

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages
        })

        await increaseAPILimit()

        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal error", {status:500});
    }
}