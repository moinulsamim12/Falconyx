'use client';

import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import PropertyFilters from '@/components/properties/PropertyFilters';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

export default function PropertiesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filters, setFilters] = useState({
        communities: [] as string[],
        categories: [] as string[],
        priceRange: '',
        searchQuery: ''
    });

    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
            const matchesCommunity = filters.communities.length === 0 || filters.communities.includes(property.community);
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(property.category);
            const matchesSearch = !filters.searchQuery ||
                property.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                property.location.toLowerCase().includes(filters.searchQuery.toLowerCase());

            let matchesPrice = true;
            if (filters.priceRange) {
                switch (filters.priceRange) {
                    case 'under-50': matchesPrice = property.price < 5000000; break;
                    case '50-100': matchesPrice = property.price >= 5000000 && property.price <= 10000000; break;
                    case '100-200': matchesPrice = property.price >= 10000000 && property.price <= 20000000; break;
                    case '200-500': matchesPrice = property.price >= 20000000 && property.price <= 50000000; break;
                    case 'above-500': matchesPrice = property.price > 50000000; break;
                }
            }

            return matchesCommunity && matchesCategory && matchesPrice && matchesSearch;
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProperties = filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilterChange = (type: string, value: string, suppressSuggestions: boolean = false) => {
        setFilters(prev => {
            const newFilters = { ...prev };
            if (type === 'community') {
                newFilters.communities = prev.communities.includes(value)
                    ? prev.communities.filter(c => c !== value)
                    : [...prev.communities, value];
            } else if (type === 'category') {
                newFilters.categories = prev.categories.includes(value)
                    ? prev.categories.filter(c => c !== value)
                    : [...prev.categories, value];
            } else if (type === 'priceRange') {
                newFilters.priceRange = prev.priceRange === value ? '' : value;
            } else if (type === 'search') {
                newFilters.searchQuery = value;
            }
            return newFilters;
        });

        if (type === 'search') {
            setShowSuggestions(value.length > 0 && !suppressSuggestions);
        }

        setCurrentPage(1);
    };

    const handleSuggestionClick = (title: string) => {
        handleFilterChange('search', title, true);
        setShowSuggestions(false);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setFilters({ communities: [], categories: [], priceRange: '', searchQuery: '' });
        setCurrentPage(1);
        setShowSuggestions(false);
    };

    const searchSuggestions = useMemo(() => {
        if (!filters.searchQuery) return [];
        const query = filters.searchQuery.toLowerCase();
        return properties
            .filter(p =>
                (p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query)) &&
                p.title.toLowerCase() !== query
            )
            .slice(0, 5)
            .map(p => ({ id: p.id, title: p.title, category: p.category }));
    }, [filters.searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div className="flex-shrink-0">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-2 tracking-tight">
                            Premium <span className="text-primary-600">Properties</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            Explore <span className="text-secondary-900 font-bold">{filteredProperties.length}</span> luxury projects curated for you
                        </p>
                    </div>

                    {/* Search Bar - Header Position */}
                    <div className="flex-grow max-w-md relative group">
                        <div className="relative">
                            <input
                                type="text"
                                value={filters.searchQuery}
                                onChange={(e) => handleFilterChange('search', e.target.value)}
                                onFocus={() => setShowSuggestions(filters.searchQuery.length > 0)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                placeholder="Search by name or location..."
                                className="w-full bg-primary-50/20 border border-primary-500/30 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-secondary-900 caret-primary-600 shadow-sm focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/40 transition-all outline-none group-hover:border-primary-500/50"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500/40 group-hover:text-primary-500/60 transition-colors" />

                            {filters.searchQuery && (
                                <button
                                    onClick={() => handleReset()}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            )}
                        </div>

                        {/* Suggestions Dropdown */}
                        <AnimatePresence>
                            {showSuggestions && searchSuggestions.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute left-0 right-0 top-full mt-3 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-50 p-2"
                                >
                                    {searchSuggestions.map((suggestion) => (
                                        <button
                                            key={suggestion.id}
                                            onClick={() => handleSuggestionClick(suggestion.title)}
                                            className="w-full text-left px-4 py-3 hover:bg-primary-50/50 rounded-xl flex items-center space-x-3 transition-colors group/item"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-100 transition-colors">
                                                <Search className="w-4 h-4 text-primary-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-secondary-900 group-hover/item:text-primary-600 transition-colors line-clamp-1">{suggestion.title}</div>
                                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{suggestion.category}</div>
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="md:hidden flex items-center justify-center space-x-2 bg-white border border-gray-100 px-6 py-3.5 rounded-2xl shadow-sm font-bold text-secondary-900 hover:bg-gray-50 transition-all active:scale-95"
                    >
                        <SlidersHorizontal className="w-5 h-5 text-primary-600" />
                        <span>Filters</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Desktop Sidebar */}
                    <div className="hidden md:block w-80 flex-shrink-0">
                        {(() => {
                            const { searchQuery, ...otherFilters } = filters;
                            return (
                                <PropertyFilters
                                    filters={otherFilters}
                                    onFilterChange={handleFilterChange}
                                    onReset={handleReset}
                                />
                            );
                        })()}
                    </div>

                    {/* Property Grid */}
                    <div className="flex-grow">
                        {currentProperties.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                <AnimatePresence mode="popLayout">
                                    {currentProperties.map((property) => (
                                        <motion.div
                                            key={property.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <PropertyCard property={property} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl p-20 text-center border border-gray-100 shadow-sm">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SlidersHorizontal className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-2">No properties found</h3>
                                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                                <button
                                    onClick={handleReset}
                                    className="mt-8 px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                                >
                                    Reset All Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center space-x-3 mt-12">
                                <button
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary-500 hover:text-primary-500 transition-all shadow-sm"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-12 h-12 rounded-xl font-bold transition-all shadow-sm ${currentPage === page
                                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-110'
                                            : 'bg-white text-gray-500 border border-gray-100 hover:border-primary-500 hover:text-primary-500'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary-500 hover:text-primary-500 transition-all shadow-sm"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer Overlay */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="fixed inset-0 bg-secondary-900/40 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[60] shadow-2xl md:hidden overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-secondary-900">Filters</h2>
                                    <button
                                        onClick={() => setIsMobileFilterOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>
                                {/* Destructure filters to remove searchQuery before passing to PropertyFilters */}
                                {(() => {
                                    const { searchQuery, ...filtersWithoutSearchQuery } = filters;
                                    return (
                                        <PropertyFilters
                                            filters={filtersWithoutSearchQuery}
                                            onFilterChange={handleFilterChange}
                                            onReset={handleReset}
                                        />
                                    );
                                })()}
                                <div className="mt-8">
                                    <button
                                        onClick={() => setIsMobileFilterOpen(false)}
                                        className="w-full py-4 bg-primary-600 text-white rounded-2xl font-bold shadow-lg shadow-primary-500/20 active:scale-95 transition-all"
                                    >
                                        Show {filteredProperties.length} Results
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
