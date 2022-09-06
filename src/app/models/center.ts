// eslint-disable-next-line @typescript-eslint/quotes
import { Comment } from "./comments";

/* eslint-disable @typescript-eslint/no-inferrable-types */
export class Center {
    idcenter?: string = '';
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    centername: string = '';
    longitude: string ='';
    latitude: string = '';
    description: string = '';
    comments: Comment = [];
}
