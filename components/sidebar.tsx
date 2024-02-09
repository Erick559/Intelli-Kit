"use client"

import { cn } from "@/lib/utils";
import { ChatBubbleIcon, CodeIcon, DashboardIcon, GearIcon, ImageIcon, SpeakerLoudIcon, VideoIcon } from "@radix-ui/react-icons";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes =[
    {
        label:"Dashboard",
        icon: DashboardIcon,
        href:"/dashboard",
        color:"text-teal-400",
    },

    {
        label:"Conversation",
        icon: ChatBubbleIcon,
        href:"/dashboard",
        color:"text-rose-500",
    }, 
    
    {
        label:"Image Generator",
        icon: ImageIcon,
        href:"/dashboard",
        color:"text-indigo-400",
    }, 

    {
        label:"Video Generator",
        icon: VideoIcon,
        href:"/dashboard",
        color:"text-orange-500",
    },

    {
        label:"Music Generator",
        icon: SpeakerLoudIcon,
        href:"/dashboard",
        color:"text-lime-400",
    },

    {
        label:"Code Generator",
        icon: CodeIcon,
        href:"/dashboard",
        color:"text-yellow-500",
    },

    {
        label:"Settings",
        icon: GearIcon,
        href:"/dashboard",
    },
]

const Sidebar = () => {
    return ( 
        <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-16 h-16 mr-2">
                        <Image 
                            fill
                            alt="Logo"
                            src="/Logo.png"
                        />
                    </div>
                    <h1 className={cn("font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-orange-400 inline-block text-transparent bg-clip-text", montserrat.className)}>
                        IntelliKit 
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map(route =>(
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn(" h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;