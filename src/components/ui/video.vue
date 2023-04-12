<template>
<div class="vivir-video">
    <slot />
</div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.vivir-video {
    position: relative;
    overflow: hidden;
    width: 100%;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
}
</style>