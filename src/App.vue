<template>
  <div class="vidalonga">
    <navigation />
    <div class="vidalonga__main">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script setup>
import navigation from './components/navigation.vue'
</script>
