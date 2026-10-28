import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';
import { Bed, Bath, Maximize, MapPin, Check } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

function getFeatureParts(feature: string) {
    // Detect if the feature starts with an emoji or symbol
    const emojiSymbolRegex = /^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F000}-\u{1FAFF}\uFE0F\u200D]+)\s*/u;
    const match = feature.match(emojiSymbolRegex);

    if (match) {
        return {
            icon: <span className="w-5 h-5 text-primary-600">{match[1]}</span>,
            text: feature.slice(match[0].length),
        };
    }

    return {
        icon: <Check className="w-5 h-5 text-primary-600" />,
        text: feature,
    };
}

function getFeatureIcon(feature: string) {
    return getFeatureParts(feature).icon;
}

function getFeatureText(feature: string) {
    return getFeatureParts(feature).text;
}

export default async function PropertyDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-white">
                        {property.images.slice(1, 5).map((img, idx) => (
                            <div key={idx} className="relative h-44 md:h-[290px] rounded-2xl overflow-hidden bg-gray-100">
                                <img src={img} alt={`${property.title} ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{property.location}</span>
                        </div>

                        <h1 className="text-4xl font-display font-bold text-secondary-900 mb-4">
                            {property.title}
                        </h1>

                        <p className="text-3xl font-bold text-primary-600 mb-8">
                            {formatPrice(property.price)}
                        </p>

                        <div className="flex items-center space-x-8 mb-8 pb-8 border-b border-gray-200">
                            {property.bedrooms > 0 && (
                                <div className="flex items-center space-x-2">
                                    <Bed className="w-6 h-6 text-primary-600" />
                                    <div>
                                        <p className="text-2xl font-bold text-secondary-900">{property.bedrooms}</p>
                                        <p className="text-sm text-gray-600">Bedrooms</p>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center space-x-2">
                                <Bath className="w-6 h-6 text-primary-600" />
                                <div>
                                    <p className="text-2xl font-bold text-secondary-900">{property.bathrooms}</p>
                                    <p className="text-sm text-gray-600">Bathrooms</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Maximize className="w-6 h-6 text-primary-600" />
                                <div>
                                    <p className="text-2xl font-bold text-secondary-900">{property.sqft}</p>
                                    <p className="text-sm text-gray-600">Sq Ft</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed">{property.description}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {property.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        {getFeatureIcon(feature)}
                                        <span className="text-gray-700">{getFeatureText(feature)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="bg-gray-50 p-8 rounded-2xl sticky top-24">
                            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                                Interested in this property?
                            </h3>
                            <Link
                                href="/contact"
                                className="block w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center mb-4"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/properties"
                                className="block w-full px-6 py-4 bg-secondary-900 text-white rounded-lg font-semibold hover:bg-secondary-800 transition-colors text-center"
                            >
                                View More Properties
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
