'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { blogPosts } from '@/data/blog';

export default function BlogSection() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !headerRef.current || !gridRef.current) return;

        const cards = gridRef.current.children;

        // Set initial state for animation (runs on mount)
        gsap.set(headerRef.current, { y: 30, opacity: 0 });
        if (cards.length > 0) {
            gsap.set(cards, { y: 50, opacity: 0 });
        }

        // Delay refresh to allow other sections (Swiper, Hero, etc.) to settle
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
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
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.6");
        }

        return () => clearTimeout(timer);
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden min-h-[400px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="blog-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                        Insights & Articles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends and guides in the luxury real estate market
                    </p>
                </div>

                <div ref={gridRef} className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="blog-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary-600 text-sm font-semibold rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User className="w-4 h-4 mr-1" />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                                >
                                    <span>Read Full Article</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-secondary-900 text-white rounded-lg hover:bg-secondary-800 transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <span>Visit Our Blog</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
