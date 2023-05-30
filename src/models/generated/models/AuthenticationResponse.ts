/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticationResponse = {
    token?: string;
    id?: string;
    username?: string;
    photo_url?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: AuthenticationResponse.role;
};

export namespace AuthenticationResponse {

    export enum role {
        ADMIN = 'ADMIN',
        USER = 'USER',
        POINT = 'POINT',
        SHOP = 'SHOP',
    }


}
