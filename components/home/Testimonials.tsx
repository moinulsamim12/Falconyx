'use client';

import { testimonials } from '@/data/properties';
import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-xl text-gray-600">
                        What our satisfied clients say about us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>

                            <div className="flex items-center">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
