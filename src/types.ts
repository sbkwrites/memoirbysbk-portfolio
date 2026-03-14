export type Page = 'home' | 'portfolio' | 'about' | 'contact';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio?: 'aspect-[4/5]' | 'aspect-square' | 'aspect-[16/9]' | 'aspect-[3/4]' | 'aspect-[4/3]';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
