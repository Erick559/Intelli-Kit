import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api_limits";

const Navbar = async() => {
    const apiLimitCount = await getApiLimitCount()
    return ( 
        <div className="flext items-center p-4">
            <MobileSidebar apiLimitCount = {apiLimitCount}/>
            
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default Navbar;