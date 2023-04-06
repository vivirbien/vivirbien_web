<template>
  <div class="vivirbien-post-page">
    <h1 v-if="post">{{ state.title }}</h1>
    <div v-if="post" v-html="state.html"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import contentful from '../../../services/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const route = useRoute()
const post = ref(null)
const state = reactive({
  title: '',
  html: ''
})

onMounted(async () => {
  if (route.params.id) {
    try {
      const { title, content } = await contentful.fetchSingleEntry(route.params.id)
      state.title = title
      state.html  = documentToHtmlString(content)
      post.value  = true
    } catch (error) {
      console.error(error);
    }
  }
});
</script>

<style scoped lang="scss">
.vivirbien-post-page {
  max-width: 1000px;
  margin: auto;
  padding-top: 60px;
}
</style>
  