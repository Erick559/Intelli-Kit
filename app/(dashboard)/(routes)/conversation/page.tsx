"use client"

import Heading from "@/components/heading";

import * as z from "zod"
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

const ConversationPage = () => {
    return ( 
        <div>
            <Heading 
                title="Conversation"
                description="Meet our Chat Buddy - your friendly conversation AI."
                icon={ChatBubbleIcon}
                iconColor="text-rose-500"
            />
        </div>
    );
}
 
export default ConversationPage;