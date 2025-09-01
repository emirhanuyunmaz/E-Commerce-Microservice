import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Custom404(){
    return(<div className="min-h-[80vh] flex justify-center items-center">
        <div className="flex flex-col gap-5">
            <p className="text-8xl text-center">404 Not Found</p>
            <p className="text-center">Your visited page not found . You may go to home page</p>
            <Button variant={"secondary"} asChild className="text-white mx-auto">

                <Link href={"/"}>Back To Home Page</Link>
            </Button>
        </div>
        
    </div>)
}