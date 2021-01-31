import { JobInterface } from '@/models/job'
/**
 * @name JobsStateInterface
 * @description
 * Interface for the Jobs state
 */
export interface JobsStateInterface {
  loading: boolean;
  jobs: JobInterface[];
}