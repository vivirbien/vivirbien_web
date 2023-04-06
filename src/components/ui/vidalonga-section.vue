<template>
    <div
        :class="`vidalonga-section vidalonga-section--${ name }`"
        :style="{ 'backgroundColor': bgColor, 'height': sectionHeight }"
    >
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  bgColor: String,
  sectionHeigh: String
})
</script>
<style scoped lang="scss">
.vidalonga-section {
    &--index_about {
        width: 100%;
        padding: 20px;
    }
}
</style>