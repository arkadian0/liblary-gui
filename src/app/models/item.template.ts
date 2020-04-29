import { PediodType } from '../enums/period-type-enum';

export interface TemplateNewspaper {
       title?: string,
       format?: string,
       publishingHouse?: string,
       pageLength?: number,
       releaseDate?: Date,
       periodicType?: PediodType
  }