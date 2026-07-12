export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Real Estate Trends in Dhaka: What to Expect in 2026",
        excerpt: "Discover the emerging neighborhoods and luxury living trends shaping the skyline of Dhaka this year.",
        image: "/images/blog/blog-1.jpg",
        category: "Market Trends",
        date: "Jan 28, 2026",
        author: "Sarah Ahmed",
        slug: "dhaka-real-estate-trends-2026"
    },
    {
        id: 2,
        title: "Investment Guide: Why Luxury Apartments are the Best Choice",
        excerpt: "An in-depth look at why high-end residential properties remain the most stable investment in the current market.",
        image: "/images/blog/blog-2.jpg",
        category: "Investment",
        date: "Jan 25, 2026",
        author: "Rahat Kabir",
        slug: "luxury-investment-guide"
    },
    {
        id: 3,
        title: "Top 5 Neighborhoods for Families in Dhaka",
        excerpt: "Explore the safest and most vibrant areas in the city that offer the perfect balance for family life.",
        image: "/images/blog/blog-3.jpg",
        category: "Lifestyle",
        date: "Jan 20, 2026",
        author: "Mila Islam",
        slug: "best-family-neighborhoods-dhaka"
    }
];
