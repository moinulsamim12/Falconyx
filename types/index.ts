export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    category: 'apartment' | 'villa' | 'penthouse' | 'commercial';
    status?: 'sale' | 'sold-out';
    community: string;
    image: string;
    images: string[];
    features: string[];
    isFeatured: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
