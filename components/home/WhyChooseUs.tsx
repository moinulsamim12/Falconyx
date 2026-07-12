'use client';

import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null); // Ref for the grid container

    const features = [
        {
            icon: Award,
            title: '15+ Years Experience',
            description: 'Proven track record in luxury real estate market',
        },
        {
            icon: Shield,
            title: 'Trusted Service',
            description: 'Transparent dealings and legal compliance guaranteed',
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Professional agents dedicated to your success',
        },
        {
            icon: TrendingUp,
            title: 'Best Value',
            description: 'Competitive pricing and excellent investment returns',
        },
    ];

    useGSAP(() => {
        // Animate Title
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animate Grid Items
        gsap.fromTo(featuresRef.current?.children || [],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: "top 75%",
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-secondary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={titleRef} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Why Choose Falconyx Properties
                    </h2>
                    <p className="text-xl text-gray-300">
                        Your trusted partner in finding the perfect property
                    </p>
                </div>

                <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="feature-card text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

