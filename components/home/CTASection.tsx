import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Ready to Find Your Dream Property?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Let our expert team help you discover the perfect home or investment opportunity
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/properties"
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center space-x-2"
                    >
                        <span>Browse Properties</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
