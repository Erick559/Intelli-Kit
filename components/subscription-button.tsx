"use client"

import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

interface SubscritpionButtonProps {
    isPro : boolean;
};

const SubscriptionButton = ({isPro = false}: SubscritpionButtonProps) => {
  const [isLoading, setLoading] = useState(false);

  const onClick  = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING ERROR", error)
    }finally{
      setLoading(false);
    }
  }

  return (
    <Button disabled={isLoading} variant={isPro ? 'default' : 'premium'} onClick={onClick}>
        {isPro ? "Manage Subscription" : 'Upgrade'}
        {!isPro && <LightningBoltIcon className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  )
};

export default SubscriptionButton;
