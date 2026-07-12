'use client';

import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProperties() {
    // Show all featured properties (now 6)
    const featured = properties.filter(p => p.isFeatured);
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={titleRef} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                        Featured Properties
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handpicked premium properties for discerning buyers
                    </p>
                </div>

                <div className="mb-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        className="!pb-20 !px-2"
                    >
                        {featured.map((property) => (
                            <SwiperSlide key={property.id} className="h-auto">
                                <div className="h-full">
                                    <PropertyCard property={property} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text-center">
                    <Link
                        href="/properties"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-secondary-900 text-white rounded-lg hover:bg-secondary-800 transition-colors font-semibold shadow-lg hover:shadow-xl"
                    >
                        <span>View All Properties</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
