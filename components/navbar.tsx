import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <div className="flext items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
            </Button>
        </div>
     );
}
 
export default Navbar;