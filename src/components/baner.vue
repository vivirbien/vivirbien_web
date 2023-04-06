<template>
    <div class="vidalonga-baner" :style="{'height': banerHeight}">
        <div class="vidalonga-baner__image-box"></div>
        <div class="vidalonga-baner__content-box">
            <h3>Vive más, vive mejor</h3>
            <p>Descubre los secretos de la longevidad y la salud óptima</p>
            <vivirButton :text="'Suscribete'"/>
        </div>
    </div>   
</template>
<script setup>
import vivirButton from '../components/ui/button.vue';

const props = defineProps({
  banerHeight: String
})
</script>
<style scoped lang="scss">
$border-color: #111;

.vidalonga-baner {
    width: 100%;
    min-height: 65vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    &__image-box {
        width: 100%;
        margin: auto;
        height: 100%;
        border-radius: 8px;
        box-shadow: 0 0 0 1px $border-color;
        background-color: var(--bg-5rd);
        background-image: url('../assets/avocado_hd.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 40px;

        @media screen and (max-width: 1000px) {
            height: 60vh;
        }
    }

    &__content-box {
        padding: 40px;

        h3 {
            font-family: 'Inconsolata', monospace;
            font-size: 2rem;
        }

        p {
            width: 200px;
        }

        @media screen and (max-width: 1000px) {
            padding: 20px;
            padding-top: 40px;
        }
    }   
}
</style>