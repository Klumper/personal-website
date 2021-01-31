import { Moment } from 'moment'

export interface JobInterface {
  jobTitle: string;
  jobType: string;
  jobDescription: string;
  companyLocation: string;
  companyName: string;
  startDate: Moment;
  endDate?: Moment;
}

export default JobInterface