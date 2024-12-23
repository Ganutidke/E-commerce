import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Mytalorzone By Sahiba offers exclusive handcrafted clothing and accessories,
              combining traditional craftsmanship with modern design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-muted-foreground hover:text-primary">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-primary">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm text-muted-foreground hover:text-primary">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mytalorzone By Sahiba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}