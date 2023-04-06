<template>
    <button class="vivirbien-btn">{{ text }}</button>
</template>
<script setup>
const props = defineProps({
  text: String
})
</script>
<style scoped lang="scss">
.vivirbien-btn {
    border: none;
    padding: 12px 22px;
    box-shadow: 0 0 0 1px #222;
    color: #222;
    font-family: 'Inconsolata', monospace;
    background-color: var(--bg-5rd);
    font-size: 1.2rem;

    &:hover {
        opacity: 0.8;
    }
}
</style>