<template>
  <teleport to=".modal-container">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 py-20 text-center">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-600"></div>
        </div>
        <div class="text-left overflow-hidden transform transition-all">
          <router-link
            :to="{ name: 'Home' }"
            v-slot="{ href, navigate, isActive }"
          >
            <div :active="isActive" :href="href" @click="navigate"
              >Home</div>
          </router-link>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>
