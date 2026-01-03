"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "/#solution" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Use Cases", href: "/#use-cases" },
    { name: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-reference" },
    { name: "Changelog", href: "/changelog" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/#investors" },
    { name: "Contact", href: "/#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/vgac_ai", label: "Twitter" },
  { icon: Github, href: "https://github.com/espirado", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/andrew-espira", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aespira@vgac.cloud", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-midnight-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-400 via-plasma-500 to-flame-500 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-midnight-900 rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-electric-400 text-lg">
                  V
                </span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                VGAC
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Stop waiting. Start computing. VGAC brings predictable scheduling
              to GPU clusters.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-midnight-700/50 border border-white/5 flex items-center justify-center text-white/40 hover:text-electric-400 hover:border-electric-400/30 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-electric-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} VGAC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-white/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-400"></span>
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

