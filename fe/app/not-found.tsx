import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="flex flex-col gap-5">
        <p className="text-center text-8xl">404 Not Found</p>
        <p className="text-center">Your visited page not found . You may go to home page</p>
        <Button variant={'secondary'} asChild className="mx-auto text-white">
          <Link href={'/'}>Back To Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
