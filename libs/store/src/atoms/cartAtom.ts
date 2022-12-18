import { atomWithStorage } from 'jotai/utils';
import { Product } from './productsAtom';


export const cartAtom = atomWithStorage<Array<Product>>('cart', []);
