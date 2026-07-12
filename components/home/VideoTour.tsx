'use client';

import { Play } from 'lucide-react';

export default function VideoTour() {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-secondary-900/60 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/images/hero/hero-2.jpg")',
                        backgroundAttachment: 'fixed'
                    }}
                />
            </div>

            <div className="relative z-20 text-center px-4">
                <div className="mb-8 inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    <span>Exclusive Preview</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Experience Ultimate Luxury
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    Take a virtual journey through our most prestigious properties and envision your future home.
                </p>

                <button
                    className="group relative flex items-center justify-center w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:scale-110 transition-transform duration-300"
                    aria-label="Play Video"
                >
                    <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-75" />
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <Play className="w-6 h-6 text-secondary-900 group-hover:text-white fill-current ml-1" />
                    </div>
                </button>
            </div>
        </section>
    );
}
