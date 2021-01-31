import { createStore, StoreOptions } from 'vuex'
import {
  RootStateInterface,
  // RootStoreInterface,
  RootStoreModel,
  // StoreModuleNames,
  // MutationType,
  // JobsStateInterface,
  // LocalesStateInterface
  } from '@/models/store'
import { initialRootState } from './initialState'

// import each Vuex module
import { jobsState } from '@/store/jobs/module'
// import { localesState } from '@/store/locales/module'
// Vuex store options to build our modularized namespaced store

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    jobsState,
    // localesState
    // as you create additional modules, you'lla dd them here similar to the itemsState
  }
}

// eslint-disable-next-line
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)

export function dispatchModuleAction<T>(
  moduleName: string,
  actionName: string,
  params?: T
): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params)
}