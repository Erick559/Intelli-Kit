"use client"

import axios from "axios";
import Heading from "@/components/heading";
import { formSchema } from "./constants";
import * as z from "zod"
import {SpeakerLoudIcon, UploadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import EmptyMusic from "@/components/empty-music";
import Loader from "@/components/loader";


const MusicPage = () => {
    const router = useRouter()
    const [music, setMusic] = useState<string>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage:ChatCompletionMessageParam={
                role: "user",
                content:values.prompt,
            };
            const newMessages = [...messages, userMessage];


            const response = await axios.post("/api/music", {messages:newMessages})
            setMessages((current)=> [...current, userMessage, response.data]);

            form.reset();

        } catch (error:any) {
            // Open Pro Modal;
            console.log(error);

        }finally {
            router.refresh();
        }
    }

    return ( 
        <div>
            <Heading 
                title="Music Generator"
                description="Craft unique melodies..."
                icon={SpeakerLoudIcon}
                iconColor="text-lime-400"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                            "
                        >
                             <FormField 
                                 name="prompt"
                                 render={({ field }) => (
                                     <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input 
                                                className="border-0
                                                outline-none
                                                focus-visible:ring-0
                                                focus-visible:ring-transparent
                                                "
                                                disabled={isLoading}
                                                placeholder="Compose a piano piece in Beethoven style."
                                                {...field}
                                            />
                                        </FormControl>
                                     </FormItem>
                                 )}
                             />
                             <Button className="col-span-12 lg:col-span-2 bg-gradient-to-r from-violet-400 via-red-400 to-rose-500 w-full" disabled={isLoading}>
                                <UploadIcon className="w-5 h-5"/>
                             </Button>
                        </form> 
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center">
                            <Loader />
                        </div>
                    )}
                     {messages.length === 0 && !isLoading &&(
                        <EmptyMusic label="Enter a prompt to generate music..."/>
                    )}
                    <div>
                        Music
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MusicPage;