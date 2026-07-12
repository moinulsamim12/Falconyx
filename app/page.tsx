import Hero from '@/components/home/Hero';
import PropertyCategories from '@/components/home/PropertyCategories';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import VideoTour from '@/components/home/VideoTour';
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import Testimonials from '@/components/home/Testimonials';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
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
