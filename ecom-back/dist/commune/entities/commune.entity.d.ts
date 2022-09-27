import { Wilaya } from "src/wilaya/entities/wilaya.entity";
export declare class Commune {
    id: number;
    code: number;
    nomLatin: string;
    nomArabe: string;
    wilaya: Wilaya;
}
