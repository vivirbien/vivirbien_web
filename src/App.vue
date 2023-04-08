<template>
  <div class="vidalonga">
    <navigation />
    <div class="vidalonga__main">
      <router-view></router-view>
    </div> 
    <footer-vidalonga />
  </div>
</template>

<script setup>
import navigation from './components/navigation.vue'
import footerVidalonga from './components/ux/footer.vue'
</script>
