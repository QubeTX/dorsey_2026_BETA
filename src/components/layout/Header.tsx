"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
import { Magnetic } from "@/components/ui/Magnetic";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-between items-start md:items-center">
      {/* Logo - Top Left */}
      <Magnetic>
        <Link 
          href="/" 
          className="pointer-events-auto bg-background/80 backdrop-blur-md border border-border/50 text-2xl font-serif font-black tracking-tighter uppercase px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all inline-block"
        >
          Dorsey
        </Link>
      </Magnetic>
      {/* Desktop Navigation - Floating Pill */}
      <div className="hidden md:block pointer-events-auto">
        <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-2 py-2 shadow-sm flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Magnetic>
                    {item.items ? (
                      <div className="relative">
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-sm font-medium uppercase tracking-wider data-[active]:bg-transparent h-auto py-2 px-4 rounded-full hover:text-primary transition-colors">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-auto">
                          <ul className="grid w-[200px] gap-1 p-2 bg-background border border-border rounded-xl shadow-xl">
                            {item.items.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary",
                                      pathname === subItem.href && "bg-muted text-primary font-bold"
                                    )}
                                  >
                                    <div className="text-xs font-bold uppercase tracking-wide">{subItem.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </div>
                    ) : (
                      <Link href={item.href}>
                        {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                        }
                        <NavigationMenuLink
                          className={cn(
                            "bg-transparent hover:bg-transparent text-sm font-medium uppercase tracking-wider h-auto py-2 px-4 rounded-full hover:text-primary transition-colors block",
                            pathname === item.href && "text-primary font-bold"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </Magnetic>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {/* Mobile Toggle - Top Right */}
      <div className="md:hidden pointer-events-auto">
        <Magnetic>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-md border-border/50 shadow-sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] pt-20 bg-background border-l border-border">
              <nav className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.items ? (
                      <div className="space-y-4">
                        <div className="font-serif font-bold text-2xl opacity-50">{item.name}</div>
                        <div className="pl-4 flex flex-col space-y-3 border-l border-border ml-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "text-lg uppercase tracking-wide transition-colors hover:text-primary hover:translate-x-2 duration-300",
                                pathname === subItem.href && "text-primary font-bold"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "font-serif font-bold text-4xl hover:text-primary transition-colors hover:translate-x-4 duration-300",
                          pathname === item.href && "text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </Magnetic>
      </div>
    </header>
  );
}
