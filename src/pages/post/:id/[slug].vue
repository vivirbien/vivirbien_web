<template>
  <div class="vidalonga-post-page">
    <h1 v-if="post">{{ state.title }}</h1>
    <div v-if="post" v-html="state.html"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import contentful from '../../../services/contentful'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const route = useRoute()
const post = ref(null)
const state = reactive({
  title: '',
  html: ''
})

const styelUser = (width='', height='') => {
  return `
    max-width: ${width};
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #222;`
}

// height="${fields.file.details.image.height}" width="${fields.file.details.image.width}"
const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" alt="${fields.description}" style="${styelUser(fields.file.details.image.width, fields.file.details.image.height)}"/>`,
    },
};

onMounted(async () => {
  if (route.params.id) {
    try {
      const { title, content } = await contentful.fetchSingleEntry(route.params.id)
      state.title = title
      state.html  = documentToHtmlString(content, options)
      post.value  = true
    } catch (error) {
      console.error(error);
    }
  }
});
</script>

<style scoped lang="scss">
.vidalonga-post-page {
  max-width: 1000px;
  margin: auto;
  padding: 100px 20px 20px 20px;
}
</style>
  