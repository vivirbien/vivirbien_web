<template>
    <div class="vidalonga-posts">
        <ul>
            <li v-for="post in postsList">
                <router-link class="text-link" :to="`/post/${post.id}/${post.slug}`">
                    <h3>{{ post.title }}</h3>
                    <br>
                    <p>{{ post.description }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import contentful from '../../services/contentful'

const postsList = ref()

onMounted(async () => {
    try {
        const posts = await contentful.fetchBlogPosts('blogPost')
        postsList.value = posts
    } catch (error) {
        console.error(error);
    }
})
</script>

<style scoped lang="scss">
.vidalonga-posts {
    padding: 60px 20px 20px 20px;
}
</style>