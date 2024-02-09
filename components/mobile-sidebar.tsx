"use client"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const MobileSidebar = () => {
    return (
        <Button variant="ghost" size="icon" className="md:hidden">
            <HamburgerMenuIcon />
        </Button>
    );
}
 
export default MobileSidebar;