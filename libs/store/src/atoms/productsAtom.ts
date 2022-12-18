import { atomWithStorage } from 'jotai/utils';

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  images: string[];
}

export const productsAtom = atomWithStorage<Array<Product>>('products',[]);
