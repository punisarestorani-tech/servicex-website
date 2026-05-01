import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.servicex.tech/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://www.servicex.tech/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.servicex.tech',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ServiceX',
      url: 'https://www.servicex.tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.servicex.tech/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Header */}
        <section className="hero-glow relative pt-16 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">Početna</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </nav>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-muted mb-6 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center gap-3 text-sm text-muted border-t border-border pt-4">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime} min čitanja</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <Section className="!py-12">
          <div className="max-w-3xl mx-auto prose-blog">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-foreground/90 leading-relaxed mb-5 text-base md:text-lg">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-5 space-y-2 text-foreground/90 text-base md:text-lg marker:text-primary">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-5 space-y-2 text-foreground/90 text-base md:text-lg marker:text-primary">{children}</ol>
                ),
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                a: ({ href, children }) => (
                  <Link
                    href={href ?? '#'}
                    className="text-primary underline underline-offset-4 hover:text-primary-dark transition-colors"
                  >
                    {children}
                  </Link>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6 border border-border rounded-lg">
                    <table className="w-full text-sm md:text-base">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-secondary">{children}</thead>,
                th: ({ children }) => (
                  <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-foreground/90 border-b border-border">{children}</td>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-secondary text-primary px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </Section>

        {/* Related Service CTA */}
        {post.relatedService && post.relatedServiceLabel && (
          <Section className="!pt-0 !pb-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-2xl p-8 border border-primary/30 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Spreman za sljedeći korak?
                </h2>
                <p className="text-muted mb-6 max-w-xl mx-auto">
                  Ako te zanima kako bi ovo izgledalo u tvojoj firmi, pogledaj naše konkretno rješenje ili zakaži besplatnu konsultaciju.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button href={post.relatedService}>{post.relatedServiceLabel}</Button>
                  <Button href="/kontakt" variant="outline">Zakaži konsultaciju</Button>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Back to blog */}
        <Section className="!pt-0 !pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/blog" className="text-primary hover:text-primary-dark transition-colors">
              ← Svi postovi
            </Link>
          </div>
        </Section>
      </article>
    </>
  );
}
