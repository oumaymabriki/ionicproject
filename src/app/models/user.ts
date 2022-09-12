/* eslint-disable @typescript-eslint/no-inferrable-types */
export class User {
    _id?: string = '';
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    fullName: string = '';
    email: string = '';
    role: string = '';
    isAdmin: boolean = false;
    phoneNumber: number = 0;
    password: string = '';
    token?: string = '';
    photo: string = ''
}
