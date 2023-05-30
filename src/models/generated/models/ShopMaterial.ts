/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Material } from './Material';
import type { Shop } from './Shop';

export type ShopMaterial = {
    id?: string;
    material?: Material;
    shop?: Shop;
    minimal_quantity?: number;
};
