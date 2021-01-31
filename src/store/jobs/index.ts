import { rootStore, dispatchModuleAction } from '../root'
import { StoreModuleNames, JobsStateInterface } from '@/models/store'
/**
 * @name jobsStore
 * @description
 * The jobs store wrapper that returns the jobsState and exposes a generic action<T> method
 * */

const jobsStore = {
  get state(): JobsStateInterface {
    return rootStore.state.jobsState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.jobsState, actionName, params)
  }
}

export const useJobsStore = () => {
  return jobsStore
}
