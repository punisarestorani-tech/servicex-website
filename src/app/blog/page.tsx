import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Saznanja o digitalizaciji poslovanja',
  description:
    'Praktični vodiči i analize o automatizaciji, AI agentima, digitalnoj transformaciji hotela i unapređenju poslovnih procesa za male i srednje firme.',
  alternates: {
    canonical: 'https://www.servicex.tech/blog',
  },
  openGraph: {
    title: 'Blog | ServiceX',
    description:
      'Vodiči o automatizaciji, AI agentima i digitalnoj transformaciji za male i srednje firme.',
    url: 'https://www.servicex.tech/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Saznanja o{' '}
            <span className="bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">
              digitalizaciji
            </span>
          </>
        }
        subtitle="Praktični vodiči o automatizaciji, AI agentima i digitalnoj transformaciji za male i srednje firme."
      />

      <Section>
        {posts.length === 0 ? (
          <p className="text-muted text-center">Nema objavljenih postova.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card-bg border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime} min čitanja</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm flex-1 mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
