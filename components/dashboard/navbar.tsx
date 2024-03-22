import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api_limits";
import { checkSubscription } from "@/lib/subscription_check";

const Navbar = async() => {
    const apiLimitCount = await getApiLimitCount()
    const isPro = await checkSubscription()

    return ( 
        <div className="flext items-center p-4">
            <MobileSidebar isPro = {isPro} apiLimitCount = {apiLimitCount}/>
            
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default Navbar;