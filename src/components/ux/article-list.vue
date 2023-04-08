<template>
    <div 
        :class="`vidalonga-articles-list ${from ? 'vidalonga-articles-list--' + from : ''}`"
    >
        <ul>
            <li 
                v-for="(post, index) in postsList"
                class="vidalonga-articles-list__item"
            >
                <router-link 
                    v-if="displayPost(index)"
                    class="text-link" 
                    :to="`/post/${post.id}/${post.slug}`"
                >
                    <img :src="post.image.fields.file.url" :alt="post.image.fields.description">
                    <h3 class="vidalonga-articles-list__title">{{ post.title }}</h3>
                    <br>
                    <p class="vidalonga-articles-list__paragraph">{{ post.description }}</p>
                    <br>
                    <vivirButton class="vidalonga-articles-list__btn" :text="'leer más'"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import contentful from '../../services/contentful'
import vivirButton from '../ui/button.vue';

const props = defineProps({
  from: String
})

const postsList = ref()

onMounted(async () => {
    try {
        const posts = await contentful.fetchBlogPosts('blogPost')
        postsList.value = posts
    } catch (error) {
        console.error(error);
    }
})

const displayPost = (index) => {
    let display
    if (props.from === 'home') {
        display = index <= 2 
    } else {
        display = true
    }
    return display
}
</script>
<style scoped lang="scss">
.vidalonga-articles-list {
    &--home {
        max-width: 1000px;

        ul {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
        }
    }

    &--post-list {
        ul {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

            @media screen and (max-width: 600px) {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
        }
    }

    ul {
        display: grid;
        gap: 20px;
    }

    &__item {
        border-radius: 8px;
        box-shadow: 0 0 0 1px #222;
        overflow: hidden;
        position: relative;
    }

    &__title {
        min-height: 150px;
        padding: 1rem;
    }
    
    &__paragraph {
        padding: 1rem;
        margin-bottom: 3rem;
    }

    &__btn {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
    }
}
</style>