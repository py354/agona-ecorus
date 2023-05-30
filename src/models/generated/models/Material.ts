/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Material = {
    id?: string;
    name?: string;
    description?: string;
    measure?: Material.measure;
    price?: number;
};

export namespace Material {

    export enum measure {
        PIECE = 'PIECE',
        LITER = 'LITER',
        KILO = 'KILO',
        GRAM = 'GRAM',
        METER = 'METER',
        SQUARE_METER = 'SQUARE_METER',
        CUBIC_METER = 'CUBIC_METER',
    }


}
