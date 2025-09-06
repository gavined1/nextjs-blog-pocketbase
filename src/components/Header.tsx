"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <span className="text-primary-foreground font-black text-lg">
                  B
                </span>
              </div>
              <span className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-500">
                Blog
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                  Blog
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
