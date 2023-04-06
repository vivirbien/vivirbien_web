<template>
<main class="vidalonga-home">
    <baner baner-height="90vh"/>
    <vidalonga-section section-height="100vh" class="vidalonga-home__section-about" name="index_about" bgColor="var(--bg-5rd)">
        <div class="vidalonga-home__section-about-Stamp">
            <img src="../assets/stamp_avocado.png" alt="">
        </div>
        <div class="vidalonga-home__section-about-Container">
            <h2>VidaLonga</h2>
            <p>un recurso en línea dedicado a la longevidad y la salud en general. Nuestra empresa fue fundada en 2023 por un equipo de expertos en nutrición, bienestar y ciencias biomédicas, con el objetivo de compartir información valiosa y ayudar a las personas a vivir vidas más largas y saludables.</p> 
        </div> 
    </vidalonga-section>
</main> 
</template>
<script setup>
import baner from '../components/baner.vue'
import vidalongaSection from '../components/ui/vidalonga-section.vue'
</script>
<style scoped lang="scss">
.vidalonga-home {
    padding-top: 60px;

    &__section {
        
        &-about {
            margin-top: 310px;
            position: relative;

            &-Container {
                padding: 100px;

                @media screen and (max-width: 1000px) {
                    padding: 100px 50px 50px 50px;
                }
            }

            &-Stamp {
                width: 200px;
                height: 200px;
                position: absolute;
                top: -100px;
                right: 10px;
            }
        }
    }
}
</style>