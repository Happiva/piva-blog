export enum Category {
  JAVASCRIPT = 'javascript',
  REACT = 'react',
  PROJECT = 'project',
  ETC = 'etc',
}

export interface LayoutProps {
  children: React.ReactNode;
}

export type Post = {
  title: string;
  thumbnail: string;
  draft: boolean;
  createdAt: string;
  category: Category;
  slug: string;
};
