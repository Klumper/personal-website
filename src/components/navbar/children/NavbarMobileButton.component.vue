<template>
 <div 
  class="relative w-12 h-12 cursor-pointer z-20 hamburger-button"
  :class="{ 'active': active }"
  @click="onClickHandler">
    <span 
      v-for="index in 3"
      :key="index"
      :class="[
        'bg-white',
        'absolute',
        'transform-gpu',
        '-translate-x-2/4',
        '-translate-y-2/4',
        'left-1/2',
        'w-1/2',
        'h-0.5',
        'transition-all',
        'duration-200',
        'ease-in-out',
        'rounded',
      ]" />
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarMobileButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    }
  },
  setup (props, { emit }) {

    const onClickHandler = () => emit('toggle', !props.active)
    
    return { onClickHandler }
  },
})
</script>

<style lang="scss">
@import './NavbarMobileButton.style';
</style>