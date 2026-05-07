"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/92 backdrop-blur-sm">
      <div className="site-container flex h-28 items-center justify-between">
        <Link
          href="/"
          className="relative block h-6 w-16 transition-opacity hover:opacity-70 md:h-7 md:w-20"
          aria-label="Leon Lee Dorsey home"
        >
          <Image
            src="/images/dorsey/dorsey-logo.png"
            alt="DORSEY"
            fill
            sizes="112px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <NavigationMenu>
            <NavigationMenuList className="gap-5">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.items ? (
                    <div className="relative">
                      <NavigationMenuTrigger
                        className={cn(
                          "h-auto bg-transparent px-0 py-2 text-[13px] font-semibold uppercase tracking-normal text-black hover:bg-transparent hover:text-black focus:bg-transparent data-[state=open]:bg-transparent",
                          item.items.some((subItem) => pathname === subItem.href) && "text-black"
                        )}
                      >
                        <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                          {item.name}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-auto">
                        <ul className="grid w-[230px] gap-1 border border-black/10 bg-white p-3 shadow-2xl">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    "block px-4 py-3 text-xs font-semibold uppercase tracking-normal text-black transition-colors hover:bg-secondary/25 focus:bg-secondary/25",
                                    pathname === subItem.href && "bg-secondary/25"
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </div>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative block py-2 text-[13px] font-semibold uppercase tracking-normal text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                          pathname === item.href && "after:w-full"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-none text-black hover:bg-secondary/20">
                {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-9 w-9 stroke-[1.4]" />}
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="!inset-x-0 !bottom-0 !top-0 !w-screen !max-w-none !transition-none data-[state=closed]:!animate-none data-[state=open]:!animate-none border-none bg-white p-0 shadow-none"
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="absolute left-9 top-12 block h-6 w-16"
                aria-label="Leon Lee Dorsey home"
              >
                <Image
                  src="/images/dorsey/dorsey-logo.png"
                  alt="DORSEY"
                  fill
                  sizes="64px"
                  className="object-contain object-left"
                />
              </Link>
              <nav className="mx-auto mt-[165px] flex w-full max-w-[320px] flex-col items-center gap-7" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <div key={item.name} className="flex w-full justify-center">
                    {item.items ? (
                      <button
                        type="button"
                        className="flex items-center justify-center gap-3 text-[40px] font-normal leading-none tracking-normal text-black transition-opacity hover:opacity-70"
                        aria-label={`${item.name} submenu`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="mt-1 h-7 w-7 stroke-[1.2]" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn("text-[40px] font-normal leading-none tracking-normal text-black transition-opacity hover:opacity-70")}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
