<template>
    <div
        :class="`vidalonga-section vidalonga-section--${ name }`"
        :style="customStyle"
    >
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  customStyle: {
    type: Object,
    default: null
  },
})
</script>
<style scoped lang="scss">
.vidalonga-section {
    margin: auto;
    max-width: 1000px;
    
    &--index_about {
        width: 100%;
        padding: 20px;
    }

    &--index_articles {
        padding: 20px;
    }
}
</style>