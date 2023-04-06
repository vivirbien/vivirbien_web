<!-- StaticNavigation.vue -->
<template>
  <nav class="vidalonga-nvigation">
    <ul class="vidalonga-nvigation__nav-list">
      <li 
        class="vidalonga-nvigation__nav-item" 
        v-for="route in staticRoutes" :key="route.name"
        :class="{ 'vidalonga-nvigation__nav-item--active': isActiveRoute(route) }" >
        <router-link 
          class="vidalonga-nvigation__nav-link"
          :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const staticRoutes = computed(() => {
  return router.options.routes.filter((route) => !route.path.includes(':'));
});

const isActiveRoute = (currentRoute) => {
  return currentRoute.name === route.name;
};
</script>

<style scoped lang="scss">
$border-color: #111;
.vidalonga-nvigation {
  width: 100%;
  height: 5vh;
  display: flex;
  position: fixed;
  background-color: var(--bg-5rd);
  z-index: 2000;
  box-shadow: inset 0 -1px 0 $border-color;

  &__nav-list {
    display: flex;
  }

  &__nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 22px;

    &--active {
      background: var(--color-featured);
      color: #000;
      border-right: 1px solid $border-color;
      border-left: 1px solid $border-color;
    }
  }

  &__nav-link {
    color: var(--color-primary);
    font-family: 'Inconsolata', monospace;
  }
}
</style>
  