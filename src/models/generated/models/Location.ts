/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaterialEntity } from './MaterialEntity';

export type Location = {
    materialList?: Array<MaterialEntity>;
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
};
