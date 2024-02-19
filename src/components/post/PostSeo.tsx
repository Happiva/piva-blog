import { BLOG_URL } from '@/constants';
import { Category } from '@/types';
import { ArticleJsonLd, NextSeo } from 'next-seo';

interface PostSeoProps {
  title: string;
  createdAt: string;
  description?: string;
  category: Category;
  slug: string;
}

const PostSeo = ({
  title,
  createdAt,
  description: descriptionProp,
  category,
  slug,
}: PostSeoProps) => {
  const description = descriptionProp ?? 'Blog Post in Piva blog';
  const publishedAt = new Date(createdAt).toISOString();

  const canonicalPath = `${BLOG_URL}/post/${slug}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalPath}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            tags: [category],
          },
          url: canonicalPath,
          siteName: 'Piva blog',
        }}
      />
      <ArticleJsonLd
        useAppDir={false}
        type="BlogPosting"
        url={canonicalPath}
        title={title}
        description={description}
        datePublished={publishedAt}
        images={[
          '/images/seo/json-ld-1x1.png',
          '/images/seo/json-ld-16x9.png',
          '/images/seo/json-ld-4x3.png',
        ]}
        authorName="Piva"
        isAccessibleForFree
      />
    </>
  );
};

export default PostSeo;
