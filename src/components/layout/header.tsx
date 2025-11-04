'use client';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          
          <span className="font-bold font-headline text-xl">
            DFlowAutomation
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button asChild className="hidden md:flex group overflow-hidden relative">
            <a href="#contact">
            <span className="absolute w-0 h-0 rounded-full bg-accent/30 group-hover:w-56 group-hover:h-56 transition-all ease-out duration-300"></span>
            <span className="relative">Contact</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-sm md:hidden animate-in fade-in-20 slide-in-from-top-4">
          <nav className="container flex flex-col items-start gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full rounded-md p-2 font-medium text-foreground/80 transition-colors hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </Button>
            <div className="w-full flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
