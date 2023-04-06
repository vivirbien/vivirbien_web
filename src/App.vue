<template>
  <div class="vivirbien">
    <navigation />
    <div class="vivirbien__main">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script setup>
import navigation from './components/navigation.vue'
</script>
