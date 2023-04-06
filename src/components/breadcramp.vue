<template>
    <nav aria-label="breadcrumb">
      <ul>
        <li v-for="(item, index) in listNames" :key="index">
            <div>
                <router-link :to="item">{{ item }}</router-link>
            </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { computed, reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute();
  const router = useRouter();
  const listNames = reactive([])

  router.options.routes.map(i => {
      if (i.name) {
        listNames.push(i.name)
      }
  })

  console.log(listNames);
  </script>
  