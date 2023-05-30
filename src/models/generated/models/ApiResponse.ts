/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiResponse = {
    message?: string;
    responseStatus?: ApiResponse.responseStatus;
    dateTime?: string;
};

export namespace ApiResponse {

    export enum responseStatus {
        OK = 'OK',
        ERROR = 'ERROR',
    }


}
