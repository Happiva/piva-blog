export enum Category {
  JAVASCRIPT = 'Javascript',
}

export type Post = {
  title: string;
  thumbnail: string;
  // content: string;
  createdAt: Date;
  category: Category;
};
