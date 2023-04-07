<template>
<main class="vidalonga-home">
    <baner :banerStyle="banerStyle"/>
    <vidalonga-section :customStyle="customStyleAbout" class="vidalonga-home__section-about" name="index_about">
        <div class="vidalonga-home__section-about-Stamp">
            <img src="../assets/stamp_avocado.png" alt="">
        </div>
        <div class="vidalonga-home__section-about-Container">
            <h2>VidaLonga</h2>
            <p>un recurso en línea dedicado a la longevidad y la salud en general. Nuestra empresa fue fundada en 2023 por un equipo de expertos en nutrición, bienestar y ciencias biomédicas, con el objetivo de compartir información valiosa y ayudar a las personas a vivir vidas más largas y saludables.</p> 
        </div> 
    </vidalonga-section>

    <vidalonga-section class="vidalonga-home__section-articles" name="index_articles">
        <article-list from="home" />
    </vidalonga-section>
    
</main> 
</template>
<script setup>
import baner from '../components/baner.vue'
import vidalongaSection from '../components/ui/vidalonga-section.vue'
import articleList from '../components/ux/article-list.vue'

const banerStyle = {'height': '90vh', 'maxWidth': '1140px'}
const customStyleAbout = {'height': '100vh', 'maxWidth': '100%', 'backgroundColor': 'var(--bg-5rd)'}
</script>
<style scoped lang="scss">
.vidalonga-home {
    padding-top: 60px;

    &__section {
        
        &-about {
            margin-top: 310px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &-Container {
                padding: 200px;

                h2 {
                    color: #212121c4;
                    font-family: "Inconsolata", monospace;
                    font-size: 4rem;
                    margin-bottom: 40px;
                }

                p {
                    font-size: 1.4rem;
                    line-height: 2.8rem;
                    color: #000000bd;
                    font-weight: 100;
                }

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

        &-articles {
            padding-top: 100px;
        }
    }
}
</style>