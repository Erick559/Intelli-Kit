import { auth } from "@clerk/nextjs";

import { prismaDb } from "./prismadb";

const DAYS_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const {userId} = auth();

    if(!userId){
        return false;
    }

    const userSubscription = await prismaDb.userSubscription.findUnique({
        where:{
            userId
        },
        select:{
            stripeSubscriptionId:true,
            stripeCustomerId:true,
            StripeCurrentPeriodEnd:true,
            StripePriceId:true,
        }
    })

    if(!userSubscription){
        return false;
    }

    const isValid = 
        userSubscription.StripePriceId && userSubscription.StripeCurrentPeriodEnd?.getTime()! + DAYS_IN_MS > Date.now();

        return !!isValid;
}