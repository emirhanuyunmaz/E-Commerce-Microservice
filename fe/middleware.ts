import { NextResponse, NextRequest } from 'next/server'
import { isValidJWT } from 'zod/v4/core';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    
    let cookie = request.cookies.get('token')
    const token = isValidJWT(cookie?.value as string)
    
    if(token && (request.url.includes("login") || request.url.includes("signup"))){
        return NextResponse.redirect(new URL('/', request.url))
    }
    
    if(!token && request.url.includes("account") ){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // return NextResponse.next()
    // return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
    matcher: ['/account', '/login','/signup','/admin',],
}