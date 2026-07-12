'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, ArrowRight, Home } from 'lucide-react';
import { Property } from '@/types';

interface PropertyCardProps {
    property: Property;
}

const statusVariants: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function PropertyCard({ property }: PropertyCardProps) {
    const isSale = property.status === 'sale';
    const isSoldOut = property.status === 'sold-out';

    return (
        <Link href={`/properties/${property.id}`} className="group block h-full">
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        loading="lazy"
                    />

                    {/* Animated Badge */}
                    {property.status && (
                        <div className="absolute top-4 right-4 z-10">
                            <motion.div
                                variants={statusVariants}
                                animate="animate"
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg ${isSale
                                    ? 'bg-emerald-500/90 text-white border border-emerald-400/50'
                                    : 'bg-rose-500/90 text-white border border-rose-400/50'
                                    }`}
                            >
                                {isSale ? 'On Sale' : 'Sold Out'}
                            </motion.div>
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-primary-600 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                            {property.category}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                        <div className="flex items-center text-white/90 text-xs font-medium">
                            <Home className="w-3.5 h-3.5 mr-1.5 text-primary-400" />
                            <span>{property.community}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                        <h3 className="text-xl font-display font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                            {property.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="w-4 h-4 mr-1.5 text-primary-500" />
                            <span className="truncate">{property.location}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-50">
                        <div className="flex items-center space-x-4 text-gray-400">
                            {property.bedrooms > 0 && (
                                <div className="flex items-center space-x-1.5" title={`${property.bedrooms} Bedrooms`}>
                                    <Bed className="w-4 h-4" />
                                    <span className="text-sm font-semibold text-gray-600">{property.bedrooms}</span>
                                </div>
                            )}
                            <div className="flex items-center space-x-1.5" title={`${property.bathrooms} Bathrooms`}>
                                <Bath className="w-4 h-4" />
                                <span className="text-sm font-semibold text-gray-600">{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center space-x-1.5" title={`${property.sqft} Square Feet`}>
                                <Maximize className="w-4 h-4" />
                                <span className="text-sm font-semibold text-gray-600">{property.sqft}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
