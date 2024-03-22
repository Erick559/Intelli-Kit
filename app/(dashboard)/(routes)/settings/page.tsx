import Heading from "@/components/dashboard/heading";
import SubscriptionButton from "@/components/dashboard/subscription-button";
import { checkSubscription } from "@/lib/subscription_check";
import { GearIcon } from "@radix-ui/react-icons";
import React from "react"

const Settings = async () => {
    const isPro = await checkSubscription();
  return (
    <div>
      <Heading 
        title="Settings"
        description="Configure your account settings."
        icon={GearIcon}
        iconColor="text-gray-700"
      /> 

      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
            {isPro ? "You are currently subscribed to Mimir Pro": "You are not subscribed to Mimir Pro"}
        </div>
        <SubscriptionButton isPro={isPro}/>
      </div>

      
    </div>
  )
};

export default Settings;
