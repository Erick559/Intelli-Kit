import Image from "next/image";

const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image 
                    alt='loader'
                    fill
                    src="/Logo.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Crafting intelligence, please await a moment...
            </p>
        </div>
    );
}
 
export default Loader;