/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    id?: string;
    photo_url?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    phone_number?: string;
    password?: string;
    balance?: number;
    role?: User.role;
};

export namespace User {

    export enum role {
        ADMIN = 'ADMIN',
        USER = 'USER',
        POINT = 'POINT',
        SHOP = 'SHOP',
    }


}
