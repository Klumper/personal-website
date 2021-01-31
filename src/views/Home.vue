<template>
  <div class="home">
    <navbar-component />
    <pre
    >{{ jobs }}
    </pre>
  </div>
</template>

<script lang="ts">
import { useJobsStore } from '@/store/jobs'
import { defineComponent, onMounted, computed } from 'vue';
import { MutationType } from '@/models/store'
import NavbarComponent from '@/components/navbar/Navbar.component.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NavbarComponent,
  },
  setup () {
    const jobsStore = useJobsStore()
    const jobs = computed(() => {
      return jobsStore.state.jobs
    })
    const loading = computed(() => {
      return jobsStore.state.loading
    })

    onMounted(() => {
      jobsStore.action(MutationType.jobs.loadJobs)
    })

    return {
      jobs,
      loading,
    }
  },
});
</script>
