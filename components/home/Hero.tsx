'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
    {
        image: "/images/hero/hero-1.jpg",
        title: "Experience Luxury Living",
        subtitle: "Discover an exclusive collection of prestigious properties in Dhaka's most sought-after locations."
    },
    {
        image: "/images/hero/hero-2.jpg",
        title: "Modern Architectural Marvels",
        subtitle: "Where contemporary design meets timeless elegance in every detail."
    },
    {
        image: "/images/hero/hero-3.jpg",
        title: "Your Sanctuary Awaits",
        subtitle: "Find your perfect peace in our carefully curated selection of premium homes."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary-900">
            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/50 to-secondary-900/30 z-10" />
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <motion.div
                            key={`badge-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 backdrop-blur-sm sm:mb-6 mb-4"
                        >
                            <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">Falconyx Properties</span>
                        </motion.div>

                        <motion.h1
                            key={`title-${currentSlide}`}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {slides[currentSlide].title.split(' ').slice(0, 1)} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300">
                                {slides[currentSlide].title.split(' ').slice(1).join(' ')}
                            </span>
                        </motion.h1>

                        <motion.p
                            key={`subtitle-${currentSlide}`}
                            className="text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link
                                href="/properties"
                                className="group px-8 py-4 bg-primary-600 text-white rounded-none font-medium hover:bg-primary-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-primary-900/20"
                            >
                                <span>Find Your Home</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-none font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                            >
                                Contact Agent
                            </Link>
                        </motion.div>

                        {/* Slide Indicators */}
                        <div className="flex items-center gap-3 mt-12">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1 transition-all duration-300 rounded-full ${currentSlide === index ? 'w-12 bg-primary-500' : 'w-6 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>


                </div>

                {/* Floating Stats - Bottom */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 hidden md:grid grid-cols-4 divide-x divide-white/10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {[
                        { label: 'Properties Available', value: '10+' },
                        { label: 'Satisfied Clients', value: '500+' },
                        { label: 'Years of Experience', value: '10+' },
                        { label: 'Client Support', value: '24/7' },
                    ].map((stat, index) => (
                        <div key={index} className="p-8 text-center group hover:bg-white/5 transition-colors cursor-default">
                            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
