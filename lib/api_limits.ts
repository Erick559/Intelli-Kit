import { auth } from "@clerk/nextjs";

import {prismaDb} from "@/lib/prismadb";

import { MAX_FREE_COUNTS } from "@/constants";

export const increaseAPILimit = async () => {
    const {userId} = auth();

    if(!userId){
        return;
    }

    const userApiLimit = await prismaDb.userAPILimit.findUnique({
        where:{
            userId
        }
    });

    if(userApiLimit){
        await prismaDb.userAPILimit.update({
            where:{userId: userId},
            data:{count: userApiLimit.count + 1},
        })
    }
    else{
        await prismaDb.userAPILimit.create({
            data:{userId: userId, count:1}
        })
    }
}

