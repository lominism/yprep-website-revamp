import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="relative block h-10 w-32 sm:h-12 sm:w-40">
              <Image
                src="/yprep-logo.png"
                alt="YPrep Academy Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              Bangkok's top boutique test prep center since 2013. Expert tutors, personalized programs, proven results.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Facebook */}
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </Link>
            </div>
          </div>

          {/* Tests */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Tests</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "SAT Prep", href: "/tests/sat" },
                { label: "ACT Prep", href: "/tests/act" },
                { label: "GRE Prep", href: "/tests/gre" },
                { label: "GMAT Prep", href: "/tests/gmat" },
                { label: "TOEFL Prep", href: "/tests/toefl" },
                { label: "IELTS Prep", href: "/tests/ielts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-orange-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "1-on-1 Tutoring", href: "/tutoring" },
                { label: "Group Classes", href: "/tutoring#group" },
                { label: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-orange-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/about#contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-orange-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} YPrep Academy. All rights reserved. Bangkok, Thailand.
        </div>
      </div>
    </footer>
  );
}
