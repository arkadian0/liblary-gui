import { PediodType } from '../enums/period-type-enum';

export interface NewspaperDto {
     newspaperId: number;
     title: string;
     format: string;
     publishingHouse: string;
     pageLength: number;
     releaseDate: Date;
     periodicType: PediodType;
}