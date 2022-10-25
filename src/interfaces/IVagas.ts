import { IBenefits } from './IBenefits';
import { ICompany } from './IEmpresa';
import { ITechnologies } from './ITechnologies';

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
  salaryRangeMax: number;
  company: ICompany;
  technologies: ITechnologies[];
  benefits: IBenefits[];
}
