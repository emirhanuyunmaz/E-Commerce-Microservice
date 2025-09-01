'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SignupCard(){
    const [select,setSelect] = useState(0)

    function nextButton(){
        setSelect(select + 1)
    }


    return(<Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>

      {select == 0 && 
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            
          </div>
        </form>
      </CardContent>
      }
      
      {select == 1 && 
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="Code">Code</Label>
              <Input
                id="code"
                type="number"
                placeholder="Code"
                required
              />
            </div>
            
          </div>
        </form>
      </CardContent>
      }
   
      {select == 2 && 
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="Code">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="Code">Password Again</Label>
              <Input
                id="passwordAgain"
                type="password"
                placeholder="Password Again"
                required
              />
            </div>
            
          </div>
        </form>
      </CardContent>
      }

      <CardFooter className="flex-col gap-2">
        <Button onClick={nextButton} type="submit" className="w-full text-white">
          Next
        </Button>
        <Button variant="outline" className="w-full">
            {"<-"}Login
        </Button>
      </CardFooter>
    </Card>)
}