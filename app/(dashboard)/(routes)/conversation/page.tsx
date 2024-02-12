"use client"

import Heading from "@/components/heading";

import * as z from "zod"
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values:z.infer<typeof formSchema>)=> {
        console.log(values);
    }

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