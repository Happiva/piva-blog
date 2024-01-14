export enum Category {
  JAVASCRIPT = 'Javascript',
}

export type Post = {
  title: string;
  thumbnail: string;
  draft: boolean;
  createdAt: string;
  category: Category;
};
