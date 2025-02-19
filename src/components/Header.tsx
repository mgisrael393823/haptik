
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from './ui/magnetic';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const ResourcesDropdown = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="group">
        <span className={cn(
          "text-base font-medium transition-colors relative py-1 inline-flex items-center gap-1",
          "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:origin-right",
          "before:transition-transform before:duration-300 group-hover:before:scale-x-100 before:origin-left",
          "before:bg-primary",
          location.pathname.startsWith('/resources')
            ? "text-foreground before:scale-x-100"
            : "text-muted-foreground hover:text-foreground"
        )}>
          Resources
          <ChevronDown className="h-4 w-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[180px]">
        <DropdownMenuItem asChild onClick={onClick}>
          <Link to="/resources/blog" className="w-full cursor-pointer">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClick}>
          <Link to="/resources/learn" className="w-full cursor-pointer">Learn</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileResourcesLinks = ({ onClick }: { onClick?: () => void }) => (
    <div className="pl-4 flex flex-col gap-4">
      <Link 
        to="/resources/blog" 
        className="text-base text-muted-foreground hover:text-foreground transition-colors"
        onClick={onClick}
      >
        Blog
      </Link>
      <Link 
        to="/resources/learn" 
        className="text-base text-muted-foreground hover:text-foreground transition-colors"
        onClick={onClick}
      >
        Learn
      </Link>
    </div>
  );

  const NavLinks = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <nav className={cn("flex items-center gap-8", className)}>
      {[
        { to: "/search", label: "Find Creators" },
        { to: "/how-it-works", label: "How It Works" },
      ].map((link) => (
        <Magnetic key={link.to} intensity={0.5}>
          <Link 
            to={link.to} 
            className={cn(
              "text-base font-medium transition-colors relative py-1",
              "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:origin-right",
              "before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left",
              "before:bg-primary",
              location.pathname === link.to 
                ? "text-foreground before:scale-x-100" 
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={onClick}
          >
            {link.label}
          </Link>
        </Magnetic>
      ))}
      <Magnetic intensity={0.5}>
        <ResourcesDropdown onClick={onClick} />
      </Magnetic>
      <Magnetic intensity={0.5}>
        <Link 
          to="/pricing" 
          className={cn(
            "text-base font-medium transition-colors relative py-1",
            "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:origin-right",
            "before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left",
            "before:bg-primary",
            location.pathname === '/pricing'
              ? "text-foreground before:scale-x-100" 
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={onClick}
        >
          Pricing
        </Link>
      </Magnetic>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container flex h-[4.5rem] items-center justify-between px-4">
        <Magnetic intensity={0.3}>
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity active:opacity-80"
          >
            <motion.div 
              initial={false}
              animate={{ scale: isOpen ? 0.95 : 1 }}
              className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            >
              Haptik
            </motion.div>
          </Link>
        </Magnetic>

        <NavLinks className="hidden md:flex" />

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full hover:bg-accent active:scale-95 transition-all duration-200"
            >
              <Menu 
                className="h-6 w-6 transition-all duration-300" 
                style={{ 
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  opacity: isOpen ? 0.5 : 1
                }}
              />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[380px] pr-0 border-l border-border/40"
          >
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-8">
                {[
                  { to: "/search", label: "Find Creators" },
                  { to: "/how-it-works", label: "How It Works" },
                ].map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className={cn(
                      "text-base font-medium transition-colors",
                      location.pathname === link.to 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2">
                  <Link 
                    to="/resources"
                    className={cn(
                      "text-base font-medium transition-colors",
                      location.pathname.startsWith('/resources')
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Resources
                  </Link>
                  <MobileResourcesLinks onClick={() => setIsOpen(false)} />
                </div>
                <Link 
                  to="/pricing" 
                  className={cn(
                    "text-base font-medium transition-colors",
                    location.pathname === '/pricing'
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <Magnetic intensity={0.4}>
                      <Button 
                        variant="ghost" 
                        asChild 
                        onClick={() => setIsOpen(false)}
                        className="w-full justify-start text-base font-medium h-14"
                      >
                        <Link to="/login">Log In</Link>
                      </Button>
                    </Magnetic>
                    <Magnetic intensity={0.4}>
                      <Button 
                        asChild 
                        onClick={() => setIsOpen(false)}
                        className="w-full justify-start text-base font-medium h-14 bg-primary hover:bg-primary/90"
                      >
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </Magnetic>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-4">
          <Magnetic intensity={0.4}>
            <Button 
              variant="ghost" 
              asChild 
              className="h-11 px-6 text-base font-medium hover:bg-accent/50"
            >
              <Link to="/login">Log In</Link>
            </Button>
          </Magnetic>
          <Magnetic intensity={0.4}>
            <Button 
              asChild 
              className="h-11 px-6 text-base font-medium bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};

export default Header;
