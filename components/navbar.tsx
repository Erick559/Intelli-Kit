import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return ( 
        <div className="flext items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default Navbar;