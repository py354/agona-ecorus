/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaterialEntity = {
    id?: string;
    name?: string;
    description?: string;
    materialMeasure?: MaterialEntity.materialMeasure;
    price?: number;
};

export namespace MaterialEntity {

    export enum materialMeasure {
        PIECE = 'PIECE',
        LITER = 'LITER',
        KILO = 'KILO',
        GRAM = 'GRAM',
        METER = 'METER',
        SQUARE_METER = 'SQUARE_METER',
        CUBIC_METER = 'CUBIC_METER',
    }


}
