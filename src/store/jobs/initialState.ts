import { JobsStateInterface } from '@/models/store'
/**
 * @name initialJobsState
 * @description
 * The Jobs state instance with the initial default values
 */
export const initialJobsState: JobsStateInterface = { 
  loading: false,
  jobs: []
}