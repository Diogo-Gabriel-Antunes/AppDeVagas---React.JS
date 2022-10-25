import { ITecnologia } from './ITecnologia';

export interface IVagas {
  id: number;
  jobTitle: string;
  jobDescription: string;
  salaryRange: number;
  vacancyLocation: string;
  seniority: string;
  typeOfContract: string;
  category: string;
  activities: string;
  active: boolean;

  company: number;
  technologies: ITecnologia[];
}
