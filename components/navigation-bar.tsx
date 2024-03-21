'use client'

import Image from "next/image";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button} from "./ui/button";
import { cn } from "@/lib/utils";
import { navigation } from "@/constants";
import { usePathname } from "next/navigation";
import SecondaryButton from "./ui/secondary-button"
import { useState } from "react";

const NavigationBar = () => {
    const { isSignedIn} = useAuth();
    const pathName = usePathname();
    const [loading,setLoading] = useState(false);
    return (
        <div className="fixed top-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
           <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
                <Link className="flex items-center" href='#hero'>
                    <Image 
                        src='/Logo.png'
                        alt="Mimir Logo"
                        width={60}
                        height={60}
                    />
                    <span className="text-3xl font-bold">
                        Mimir.
                    </span>
                </Link>

                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                       {navigation.map((item) => {
                            const isActive = pathName.startsWith(item.href);
                            return(
                                <Link 
                                    className={`block relative font-code text-xl uppercase transition-colors hover:text-color-1 hover:underline ${item.onlyMobile ? 'lg:hidden': ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-10`}
                                    key={item.id}
                                    href = {item.href}
                                >
                                    {item.title}                            
                                </Link>
                            )
                          
                        })}
                    </div>
                </nav>

                <div className="flex items-center gap-5">
                    <Link
                        className="hidden lg:block"
                        href = {isSignedIn ? '/dashboard' : '/sign-up'}
                    >
                        <Button className="uppercase" variant={'premium'}>try for free</Button>
                    </Link>

                    <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
                        <SecondaryButton className="px-8" loading = {loading}>
                            Sign In
                        </SecondaryButton>
                    </Link>
                </div>
           </div>
        </div>
    )
}

export default NavigationBar;




