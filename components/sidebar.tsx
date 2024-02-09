"use client"

import Image from "next/image";
import Link from "next/link";

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
                    <h1 className="font-bold text-2xl">
                        IntelliKit
                    </h1>
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;