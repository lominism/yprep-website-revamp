"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const tests = [
  { name: "SAT", href: "/tests/sat", desc: "Scholastic Assessment Test" },
  { name: "ACT", href: "/tests/act", desc: "American College Testing" },
  { name: "GRE", href: "/tests/gre", desc: "Graduate Record Examinations" },
  { name: "GMAT", href: "/tests/gmat", desc: "Graduate Management Admission Test" },
  { name: "TOEFL", href: "/tests/toefl", desc: "Test of English as a Foreign Language" },
  { name: "IELTS", href: "/tests/ielts", desc: "International English Language Testing System" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-44">
          <Image
            src="/yprep-logo.png"
            alt="YPrep Academy Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tests</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] grid-cols-2 gap-2 p-3">
                  {tests.map((test) => (
                    <li key={test.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={test.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600"
                        >
                          <div className="text-sm font-semibold leading-none">{test.name}</div>
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {test.desc}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/tutoring">Tutoring</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/gallery">Gallery</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="bg-orange-400 hover:bg-orange-500">
            <Link href="/about#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b px-4 py-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Tests
              </p>
              <div className="pl-2 flex flex-col gap-1">
                {tests.map((test) => (
                  <Link
                    key={test.name}
                    href={test.href}
                    className="text-sm font-medium py-1.5 hover:text-orange-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {test.name}
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
            {[
              { label: "Tutoring", href: "/tutoring" },
              { label: "Gallery", href: "/gallery" },
              { label: "About Us", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Separator />
            <Button asChild className="bg-orange-400 hover:bg-orange-500 w-full mt-1">
              <Link href="/about#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
