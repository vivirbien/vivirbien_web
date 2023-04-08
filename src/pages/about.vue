<template>
    <div class="vidalonga-about">
    <div class="section mb-2">
        <h1>Bienvenido a VidaLonga</h1>
        <p>Tu recurso en línea dedicado a la longevidad y la salud en general. Fundada en 2023 por un grupo de entusiastas apasionados por la nutrición, el bienestar y las ciencias biomédicas, nuestra meta es compartir información valiosa y apoyar a las personas en su camino hacia una vida más larga y saludable.</p>
    </div>

    <div class="mision">
        <h2>Misión y visión</h2>
    </div>

    <p class="paragraph-mision">Nuestra misión es proporcionar información accesible, confiable y actualizada sobre longevidad y bienestar, empoderando a las personas para tomar decisiones informadas sobre su salud y estilo de vida. Nuestra visión es convertirnos en el recurso líder en longevidad y salud en general, creando una comunidad comprometida y apoyándonos mutuamente en nuestro camino hacia una vida más larga y plena.</p>

    <div class="section">
        <h2>Valores fundamentales</h2>
        <p>Integridad: Nos comprometemos a presentar información basada en investigaciones sólidas y prácticas éticas, asegurando la calidad y confiabilidad de nuestro contenido.</p>
        <p>Excelencia: Buscamos la excelencia en todo lo que hacemos, desde la selección de temas hasta la presentación de información y recursos.</p>
        <p>Innovación: Nos esforzamos por estar al tanto de los últimos avances en investigación y tecnología para ofrecer información actualizada y relevante a nuestra comunidad.</p>
        <p>Accesibilidad: Creemos que la información sobre longevidad y salud debe ser accesible para todos, independientemente de su origen o nivel de experiencia.</p>
        <p>Enfoque en la comunidad: Nuestro objetivo es fomentar una comunidad de personas comprometidas con la longevidad y la salud, compartiendo conocimientos, experiencias y apoyo mutuo.</p>
    </div>

    <div class="section">
        <h2>Historia de la empresa</h2>
        <p>VidaLonga comenzó como un proyecto de pasión de nuestros fundadores, quienes compartían un interés común en la longevidad y la salud en general. En 2023, decidieron unir sus habilidades y conocimientos para crear un recurso en línea que pudiera llegar a un público más amplio. Desde entonces, VidaLonga ha crecido y evolucionado, ampliando su alcance y aumentando la cantidad y calidad de su contenido.</p>
    </div>

    <div class="section">
        <h2>Equipo</h2>
        <p>Nuestro equipo está formado por personas apasionadas y comprometidas en diversas áreas, como nutrición, ejercicio, medicina y bienestar emocional. Aunque no somos expertos, constantemente practicamos y experimentamos para mejorar nuestro conocimiento y experiencia en estos temas. Nos enorgullecemos de ofrecer contenido completo, preciso y relevante para las necesidades de nuestra comunidad.</p>
    </div>

    <div class="section">
        <h2>Contacto</h2>
        <p>Agradecemos sinceramente tu interés en VidaLonga y esperamos que encuentres el conocimiento y el apoyo que buscas en nuestro sitio web. Si tienes alguna pregunta, sugerencia o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en tu camino hacia una vida más larga y saludable.</p>
    </div>


    </div>
</template>
<script setup>
import { useHead } from 'unhead'

useHead({
    title: 'Bienvenido a VidaLonga',
    meta: [
        {
        name: 'description',
        content: 'Tu recurso en línea dedicado a la longevidad y la salud en general. Fundada en 2023 por un grupo de entusiastas apasionados por la nutrición, el bienestar y las ciencias biomédicas, nuestra meta es compartir información valiosa y apoyar a las personas en su camino hacia una vida más larga y saludable.',
        },
    ],
})
</script>
<style scoped lang="scss">
.vidalonga-about {
    max-width: 1000px;
    margin: auto;
    padding: 120px 20px 20px 20px;
    line-height: 1.6;
    color: #333;
    margin: auto;

    h1, h2 {
        font-weight: 500;
        margin-bottom: 1rem;
        color: #212121c4;
        font-family: "Inconsolata", monospace;
        font-weight: 400;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: #424242;
    }

    .mb-2 {
        margin-bottom: 20px;
    }

    .section {
        margin-bottom: 2rem;
        padding: 1.5rem;
    }

    .section:nth-child(even) {
        background-color: #FFFFFF;
        border-radius: 8px;
        box-shadow: 0 0 0 1px #22222227;
    }

    .section:last-child {
        margin-bottom: 0;
    }

    .mision {
        background-image: url('../assets/broccoli_themed.png');
        background-size: cover;
        margin: auto;

        h2 {
            padding: 120px;
            text-align: right;
            font-size: 2rem;

            @media screen and (max-width: 600px) {
                padding: 60px;
            }
        }
    }

    .paragraph-mision {
        max-width: 800px; 
            margin: auto; 
            margin-top: 20px; 
            margin-bottom: 200px;
            font-family: "Inconsolata", monospace;
            font-size: 1.6rem;
    }
}
</style>