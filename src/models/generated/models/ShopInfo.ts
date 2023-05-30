/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';
import type { ShopMaterial } from './ShopMaterial';

export type ShopInfo = {
    id?: string;
    shop_name?: string;
    photo_url?: string;
    address?: string;
    city?: string;
    description?: string;
    shop_materials?: Array<ShopMaterial>;
    items?: Array<Item>;
};
