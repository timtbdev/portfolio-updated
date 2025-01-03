import { create } from "domain";

export type ContentType = {
  id?: number;
  title?: string;
  text: string[];
  image?: ImageType;
  url?: UrlType;
};

export type ImageType = {
  src: string;
  alt: string;
};

export type UrlType = {
  link: string;
  text: string;
};

export type SeoType = {
  title: string;
  subTitle: string;
  author: { name: string; twitterUrl: string; twitterAddress: string };
  description: string;
  keywords: Array<string>;
  tags: Array<string>;
};

type SocialType = {
  id: number;
  name: string;
  username?: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type MenuType = {
  id: number;
  title: string;
  slug: string;
  icon: React.FC<{ className?: string }>;
};

type BlogPostType = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  content: string;
  created_at: string;
  updated_at: string;
  slug: string;
  author: { name: string; image: string };
  published: boolean;
};
