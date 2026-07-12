import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2, Bookmark } from 'lucide-react';

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    console.log('Rendering blog post for slug:', slug);
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button & Meta */}
                <div className="mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                        <span>Back to all articles</span>
                    </Link>

                    <div className="flex items-center space-x-2 text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">
                        <span className="w-8 h-0.5 bg-primary-600"></span>
                        <span>{post.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-6 gap-4">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <User className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-gray-900 font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-gray-500">{post.date}</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors rounded-full hover:bg-primary-50">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors rounded-full hover:bg-primary-50">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cover Image */}
                <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl bg-gray-100">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
                    <p className="text-xl text-gray-600 italic mb-12">
                        {post.excerpt}
                    </p>

                    <div className="space-y-8">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <h2 className="text-3xl font-display font-bold text-secondary-900 mt-12 mb-6">
                            The Evolving Landscape
                        </h2>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <blockquote className="border-l-4 border-primary-500 pl-8 py-4 my-12 italic text-2xl text-secondary-900 font-display">
                            &quot;Luxury real estate isn&apos;t just about location; it&apos;s about the lifestyle and the story behind every square foot.&quot;
                        </blockquote>

                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary-900 mt-12 mb-4">
                            Key Takeaways
                        </h3>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600">
                            <li>Focus on sustainable luxury and smart home integration.</li>
                            <li>Neighborhood development and accessibility remain top priorities.</li>
                            <li>Investment stability in the premium residential sector is at an all-time high.</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                            Inspired by this story?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Our experts are here to help you navigate the luxury real estate journey in Dhaka.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex px-8 py-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
