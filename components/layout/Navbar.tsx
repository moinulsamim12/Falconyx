'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Building2, Info, Phone } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolledFromTop, setScrolledFromTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolledFromTop(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/properties', label: 'Properties', icon: Building2 },
        { href: '/contact', label: 'Contact', icon: Phone },
    ];

    const isScrolled = scrolledFromTop || pathname !== '/';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-0'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Falconyx Properties" className="w-10 h-10" />
                        <div>
                            <h1 className={`text-xl font-display font-bold transition-colors ${isScrolled ? 'text-secondary-900' : 'text-white'}`}>
                                Falconyx Properties
                            </h1>
                            <p className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>Luxury Real Estate</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors font-medium hover:text-primary-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/properties"
                            className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                        >
                            View Properties
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'}`}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Icon className="w-5 h-5 text-primary-600" />
                                    <span className="font-medium text-gray-700">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
