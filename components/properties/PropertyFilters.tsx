'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-100 py-6 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full mb-4 group"
            >
                <span className="text-sm font-bold text-secondary-900 uppercase tracking-wider group-hover:text-primary-600 transition-colors">
                    {title}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="space-y-3 pt-1">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

interface FilterOptionProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    count?: number;
}

function FilterOption({ label, checked, onChange, count }: FilterOptionProps) {
    return (
        <label className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center">
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-200 bg-white transition-all checked:border-primary-500 checked:bg-primary-500 hover:border-primary-400"
                    />
                    <Check className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-primary-600 transition-colors">
                    {label}
                </span>
            </div>
            {count !== undefined && (
                <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </label>
    );
}

interface FilterSidebarProps {
    filters: {
        communities: string[];
        categories: string[];
        priceRange: string;
    };
    onFilterChange: (type: string, value: string) => void;
    onReset: () => void;
}

export default function PropertyFilters({ filters, onFilterChange, onReset }: FilterSidebarProps) {
    const communities = [
        'The Premium Smart City',
        'Ashulia Model Town',
        'The Premium Royal City',
        'Bashundhara Residencial Area'
    ];

    const categories = [
        { id: 'apartment', label: 'Apartments' },
        { id: 'villa', label: 'Villas' },
        { id: 'penthouse', label: 'Penthouses' },
        { id: 'commercial', label: 'Commercial' }
    ];

    const priceRanges = [
        { id: 'under-50', label: 'Under 50 Lac BDT' },
        { id: '50-100', label: '50 Lac - 1 Crore BDT' },
        { id: '100-200', label: '1 Crore - 2 Crore BDT' },
        { id: '200-500', label: '2 Crore - 5 Crore BDT' },
        { id: 'above-500', label: 'Above 5 Crore BDT' }
    ];

    return (
        <aside className="bg-white rounded-3xl p-8 sticky top-28 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                        <SlidersHorizontal className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-secondary-900">Filters</h2>
                        <p className="text-xs text-gray-400 font-medium">Refine your search</p>
                    </div>
                </div>
                <button
                    onClick={onReset}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors uppercase tracking-widest px-2 py-1 hover:bg-primary-50 rounded-lg"
                >
                    Clear All
                </button>
            </div>

            <div className="space-y-2">
                <FilterSection title="Communities">
                    {communities.map((community) => (
                        <FilterOption
                            key={community}
                            label={community}
                            checked={filters.communities.includes(community)}
                            onChange={() => onFilterChange('community', community)}
                        />
                    ))}
                </FilterSection>

                <FilterSection title="Property Type">
                    {categories.map((cat) => (
                        <FilterOption
                            key={cat.id}
                            label={cat.label}
                            checked={filters.categories.includes(cat.id)}
                            onChange={() => onFilterChange('category', cat.id)}
                        />
                    ))}
                </FilterSection>

                <FilterSection title="Price Range">
                    {priceRanges.map((range) => (
                        <FilterOption
                            key={range.id}
                            label={range.label}
                            checked={filters.priceRange === range.id}
                            onChange={() => onFilterChange('priceRange', range.id)}
                        />
                    ))}
                </FilterSection>
            </div>

        </aside>
    );
}
