import { Poppins } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import UserAvatar from "./user-avatar";
import { cn } from "@/lib/utils";

const poppins = Poppins ({
    weight:['500','600','700'],
    subsets: ['latin'],

})

const NavigationBar = () => {
    const { isSignedIn} = useAuth();
    return (
        <div className="p-4 flex justify-between items-center relative z-10">
            <aside className="flex items-center gap-1">
                <Image 
                    src={'/Logo.png'}
                    width={60}
                    height={60}
                    alt="Mimir Logo"
                />
                <span className="text-xl font-bold">
                    Mimir.
                </span>
            </aside>

            <nav className="hidden md:block">
                <ul className="flex items-center justify-center gap-8">
                    <Link href={'#'}>Features</Link>
                    <Link href={'#'}>Pricing</Link>
                </ul>
            </nav>

          
            <aside className="flex items-center justify-center gap-7">
                <Link
                    href={isSignedIn ? '/dashboard':'/sign-up'}
                >
                    <Button variant={'premium'} className={poppins.className}>
                        TRY FOR FREE
                    </Button>
                </Link>

                <UserButton />
            </aside>

        </div>
    )
}

export default NavigationBar