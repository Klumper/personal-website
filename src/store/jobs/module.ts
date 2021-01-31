import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import axios from 'axios'
import { initialJobsState } from './initialState'
import { JobInterface } from '@/models/job/job.interface'
import {
  MutationType,
  RootStateInterface,
  JobsStateInterface
} from '@/models/store'

export const mutations: MutationTree<JobsStateInterface> = {
  loadingJobs(state: JobsStateInterface) {
    state.loading = true
  },
  loadedJobs(state: JobsStateInterface, jobs: JobInterface[]) {
    state.jobs = jobs
    state.loading = false
  },
}

export const actions: ActionTree<JobsStateInterface, RootStateInterface> = {
  async loadJobs({ commit }) {
    commit(MutationType.jobs.loadingJobs)
    try {
      commit(MutationType.jobs.loadingJobs)
      const { data } = await axios.get('/job');
      commit(MutationType.jobs.loadedJobs, data)
    } catch (error) {
      console.error(`[jobs/module]: ${error}`);
      throw error;
    }
  },
}

export const getters: GetterTree<JobsStateInterface, RootStateInterface> = {}

const namespaced = true
const state: JobsStateInterface = initialJobsState

export const jobsState: Module<JobsStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}