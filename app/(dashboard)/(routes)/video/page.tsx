"use client"

import axios from "axios";
import Heading from "@/components/dashboard/heading";
import { formSchema } from "./constants";
import * as z from "zod"
import {UploadIcon, VideoIcon} from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

import EmptyVideo from "@/components/dashboard/empty-video";
import Loader from "@/components/dashboard/loader";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const VideoPage = () => {
    const router = useRouter()
    const [video,setVideo] = useState<string>()
    const proModal = useProModal()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo(undefined)

            const response = await axios.post("/api/video",values);
            
            setVideo(response.data[0])
            form.reset();

        } catch (error:any) {
            if(error?.response?.status === 403){
                proModal.onOpen();
            }else{
                toast.error('Something went wrong')
            }
        }finally {
            router.refresh();
        }
    }

    return ( 
        <div>
            <Heading 
                title="Video Generator"
                description="Create simple or complex videos using this model..."
                icon={VideoIcon}
                iconColor="text-orange-500"
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
                                                placeholder="A video of coral reefs..."
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
                     {!video && !isLoading &&(
                        <EmptyVideo label="Late on a presentation..."/>
                    )}
                    {video &&(
                        <video className="w-full aspect-video mt-8 rounded-lg border b-black" controls>
                            <source src={video}/>
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default VideoPage;