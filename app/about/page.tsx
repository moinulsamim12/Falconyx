import { Award, Target, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                        About Falconyx Properties
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your trusted partner in luxury real estate for over 15 years
                    </p>
                </div>

                {/* Story Section */}
                <div className="mb-20">
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Founded in 2009, Falconyx Properties has been at the forefront of Dhaka&apos;s luxury real estate market.
                                We specialize in premium residential and commercial properties, offering our clients unparalleled
                                service and access to the finest properties in the city.
                            </p>
                            <p>
                                Our team of experienced professionals is dedicated to understanding your unique needs and helping
                                you find the perfect property. Whether you&apos;re looking for your dream home or a lucrative investment
                                opportunity, we&apos;re here to guide you every step of the way.
                            </p>
                            <p>
                                With a portfolio of over 500 premium properties and more than 1000 satisfied clients, we&apos;ve built
                                a reputation for excellence, integrity, and customer-first service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: 'Excellence',
                                description: 'We strive for excellence in every transaction',
                            },
                            {
                                icon: Target,
                                title: 'Integrity',
                                description: 'Transparent and honest dealings always',
                            },
                            {
                                icon: Users,
                                title: 'Customer First',
                                description: 'Your satisfaction is our top priority',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Innovation',
                                description: 'Leveraging technology for better service',
                            },
                        ].map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient Background Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-2xl p-12 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Properties Sold', value: '500+' },
                            { label: 'Happy Clients', value: '1000+' },
                            { label: 'Years Experience', value: '15+' },
                            { label: 'Expert Agents', value: '50+' },
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
