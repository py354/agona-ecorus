/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShopMaterial } from './ShopMaterial';

export type LocationInfo = {
    /**
     * Не указывать при создании пункта приёма
     */
    id?: string;
    name?: string;
    latitude?: string;
    longitude?: string;
    /**
     * Указывать всегда строчными (НЕ ПРОПИСНЫМИ) буквами
     */
    city?: string;
    materials?: Array<ShopMaterial>;
};
