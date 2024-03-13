/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lN7MMGPqHsb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';

import Image from 'next/image';
import {
  CalendarIcon,
  DropdownMenuIcon,
  HomeIcon,
  IdCardIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden bg-gray-100/40 border-r lg:block dark:bg-gray-800/40 w-60">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6 border-b">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto px-4 py-2 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <CalendarIcon className="h-4 w-4" />
              Billing Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <IdCardIcon className="h-4 w-4" />
              Billing
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <PersonIcon className="h-4 w-4" />
              Profile
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex h-16 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Button className="lg:hidden" variant="default">
            <DropdownMenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex-1">
            <form>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex items-start justify-center min-h-screen w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
