export const allCategories = {
  javascript: 'javascript',
  react: 'react',
  project: 'project',
  etc: 'etc',
} as const;

export type Category = (typeof allCategories)[keyof typeof allCategories];

export type Post = {
  title: string;
  summary: string;
  thumbnail?: string;
  draft: boolean;
  createdAt: string;
  category: Category;
  slug: string;
};

export type Heading = {
  text: string;
  level: number;
};
