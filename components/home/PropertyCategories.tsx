'use client';

import { categories } from '@/data/properties';
import { Building2, Home, Building, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
    Building2,
    Home,
    Building,
    Briefcase,
};

export default function PropertyCategories() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !headerRef.current || !gridRef.current) return;

        const cards = gridRef.current.children;

        // Set initial state
        gsap.set(headerRef.current, { y: 30, opacity: 0 });
        if (cards.length > 0) {
            gsap.set(cards, { y: 50, opacity: 0 });
        }

        // Delay refresh
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

        if (cards.length > 0) {
            tl.to(cards, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.6");
        }

        return () => clearTimeout(timer);
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                        Property Categories
                    </h2>
                    <p className="text-xl text-gray-600">
                        Find the perfect property type for your needs
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const Icon = iconMap[category.icon as keyof typeof iconMap];
                        return (
                            <Link
                                key={category.id}
                                href={`/properties?category=${category.id}`}
                                className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-primary-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600">{category.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
