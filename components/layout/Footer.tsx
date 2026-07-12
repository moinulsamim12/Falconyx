import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="Falconyx Properties" className="w-10 h-10" />
                            <div>
                                <h3 className="text-xl font-display font-bold">Falconyx Properties</h3>
                                <p className="text-sm text-gray-400">Luxury Real Estate</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for premium residential and commercial properties in Dhaka.
                            We specialize in luxury real estate with customer-first service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/falconyxproperties" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
                            <li><Link href="/properties" className="text-gray-400 hover:text-primary-500 transition-colors">Properties</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400">Sheikhdi, Dhaka - 1362</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+8801929738514" className="text-gray-400 hover:text-primary-500 transition-colors">+880 1929-738514</a>
                                    <a href="tel:+8801581491903" className="text-gray-400 hover:text-primary-500 transition-colors">+880 1581-491903</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <a href="mailto:falconyxproperties@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">falconyxproperties@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Falconyx Properties. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Developed by{' '}
                        <a
                            href="https://devgenit.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold bg-gradient-to-r from-[#ff8a00] to-[#ff3d9a] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
                        >
                            DevGenit
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
