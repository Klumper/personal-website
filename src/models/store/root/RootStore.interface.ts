import { JobsStateInterface } from '../jobs/JobsState.interface'

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */

export interface RootStoreInterface {
  jobsState: JobsStateInterface;
}
  