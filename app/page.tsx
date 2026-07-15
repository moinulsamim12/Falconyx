import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import PropertyCategories from '@/components/home/PropertyCategories';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import VideoTour from '@/components/home/VideoTour';
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import Testimonials from '@/components/home/Testimonials';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

const pageTitle = 'Falconyx Properties | Luxury Real Estate in Dhaka';
const pageDescription =
  'Falconyx Properties helps buyers find premium residential and commercial properties in Dhaka with a luxury-focused real estate experience.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Falconyx Properties',
  description: pageDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sheikhdi',
    addressLocality: 'Dhaka',
    postalCode: '1362',
    addressCountry: 'BD',
  },
  telephone: ['+8801929738514', '+8801581491903'],
  email: 'falconyxproperties@gmail.com',
  sameAs: ['https://www.facebook.com/falconyxproperties'],
  areaServed: {
    '@type': 'City',
    name: 'Dhaka',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <PropertyCategories />
      <FeaturedProperties />
      <VideoTour />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <BlogSection />
      <CTASection />
    </>
  );
}
