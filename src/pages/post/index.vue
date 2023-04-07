<template>
    <div class="vidalonga-posts">
        <article-list from="post-list" />
    </div>
</template>
<script setup>
import articleList from '../../components/ux/article-list.vue';
</script>

<style scoped lang="scss">
.vidalonga-posts {
    max-width: 1000px;
    margin: auto;
    padding: 100px 20px 20px 20px;
}
</style>