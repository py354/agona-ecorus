export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    POINT = 'POINT',
    SHOP = 'SHOP',
}


export interface RegisterResponse {
    id: string
    photo_url: string
    firstname: string
    lastname: string
    username: string
    email: string
    phone_number: string
    password: string
    balance: number
    role: Role
}

export interface RegisterBody {
    email: string
    phone_number: string
    password: string
    balance: string | number
}




















