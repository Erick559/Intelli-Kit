'use client'

import Image from "next/image";
import Link from "next/link";
import { useAuth} from "@clerk/nextjs";
import { Button} from "../ui/button";
import { navigation } from "@/constants";
import SecondaryButton from "../ui/secondary-button"
import { HamburgerMenu } from "../design/Header";
import { useEffect, useState } from "react";
import MenuSvg from "../ui/MenuSvg";
import {enablePageScroll, disablePageScroll} from "scroll-lock";



const NavigationBar = () => {
    const { isSignedIn} = useAuth();
    const [clickedLink,setClickedLink] = useState('');
    const [openNavigation,setOpenNavigation] = useState(false);
  

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll();
        }
        else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    const handleClick = () => {
        if(!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }

    const mainClickFunction = (href) => {
        handleClick();
        setClickedLink(href)
    }

    return (
        <div className={`fixed top-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8':'bg-n-8/90 lg:backdrop-blur-sm'}`}>
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

                <nav className={`${openNavigation ? 'flex':'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                       {navigation.map((item) => {
                            return(
                                <Link 
                                    className={`block relative font-code text-xl uppercase transition-colors hover:text-color-1 hover:underline ${item.onlyMobile ? 'lg:hidden': ''} ${item.href == clickedLink? 'text-color-1': 'text-slate-50'} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-10`}
                                    key={item.id}
                                    href = {item.href}
                                    onClick={() => mainClickFunction(item.href)}
                                >
                                    {item.title}                            
                                </Link>
                            )
                          
                        })}
                    </div>
                    <HamburgerMenu />
                </nav>

                <div className="flex items-center gap-5">
                    <Link
                        className="hidden lg:block"
                        href = {isSignedIn ? '/dashboard' : '/sign-up'}
                    >
                        <Button className="uppercase" variant={'premium'}>try for free</Button>
                    </Link>

                    <Link className="hidden lg:block" href={isSignedIn ? '/dashboard' : '/sign-in'}>
                        <SecondaryButton className="px-8">
                            Sign In
                        </SecondaryButton>
                    </Link>
                </div>
                <Button variant={'premium'} className="ml-auto lg:hidden" onClick={toggleNavigation}>
                        <MenuSvg openNavigation={openNavigation}/>
                </Button>
           </div>
        </div>
    )
}

export default NavigationBar;




