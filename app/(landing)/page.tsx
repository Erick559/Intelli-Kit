'use client'

import Hero from "@/components/landing-page/hero";
import NavigationBar from "@/components/landing-page/navigation-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (  
        <>
            <div className="pt-[4.75rem] lg:-[5.25rem] overflow-hidden bg-n-8 text-white">
                <NavigationBar />
                <Hero />
            </div>
        </>
    );
}
 
export default LandingPage;