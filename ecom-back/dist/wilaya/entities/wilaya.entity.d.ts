import { Commune } from "src/commune/entities/commune.entity";
export declare class Wilaya {
    id: number;
    code: number;
    nomLatin: string;
    nomArabe: string;
    commune: Commune[];
}
