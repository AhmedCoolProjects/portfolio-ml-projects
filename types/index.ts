import { StaticImageData } from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  tags?: string[];
  github?: string;
  demo?: string;
  technologies?: string[];
  date?: string;
  isActive?: boolean;
  version?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type PageHeaderProps = {
  title: string;
  image: StaticImageData;
};
