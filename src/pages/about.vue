<template>
    <div class="vidalonga-about">
        <section>
            <p>Bienvenido</p>
            <h1 class="vidalonga-about__text-company-name">VidaLonga</h1>
            <p class="vidalonga-about__text-secondery"> un recurso en línea dedicado a la longevidad y la salud en general. Nuestra empresa fue fundada en 2023 por un equipo de expertos en nutrición, bienestar y ciencias biomédicas, con el objetivo de compartir información valiosa y ayudar a las personas a vivir vidas más largas y saludables.</p>
        </section>
        <br>
        <img class="vidalonga-images" src="../assets/flores_y_frutas.png" alt="">
        <br>
        <br>
        <section>
            <h2>Misión y visión</h2>
            <p>Nuestra misión es proporcionar información accesible, confiable y actualizada sobre longevidad y bienestar, empoderando a las personas para que tomen decisiones informadas sobre su salud y estilo de vida. Nuestra visión es convertirnos en el recurso líder en longevidad y salud en general, creando una comunidad comprometida y apoyándonos mutuamente en nuestro camino hacia una vida más larga y plena.</p>
        </section>
        <br>
        <section>
            <h2>Valores fundamentales</h2>
            <ul>
                <li><strong>Integridad:</strong> Nos comprometemos a presentar información basada en investigaciones sólidas y prácticas éticas, asegurando la calidad y confiabilidad de nuestro contenido.</li>
                <li><strong>Excelencia:</strong> Buscamos la excelencia en todo lo que hacemos, desde la selección de temas hasta la presentación de información y recursos.</li>
                <li><strong>Innovación:</strong> Nos esforzamos por estar al tanto de los últimos avances en investigación y tecnología para ofrecer información actualizada y relevante a nuestra comunidad.</li>
                <li><strong>Accesibilidad:</strong> Creemos que la información sobre longevidad y salud debe ser accesible para todos, independientemente de su origen o nivel de experiencia.</li>
                <li><strong>Enfoque en la comunidad:</strong> Nuestro objetivo es fomentar una comunidad de personas comprometidas con la longevidad y la salud, compartiendo conocimientos, experiencias y apoyo mutuo.</li>
            </ul>
        </section>

        <section>
            <h2>Historia de la empresa</h2>
            <p>VidaLonga comenzó como un proyecto de pasión de nuestros fundadores, quienes compartían un interés común en la longevidad y la salud en general. En 2023, decidieron unir sus habilidades y conocimientos para crear un recurso en línea que pudiera llegar a un público más amplio. Desde entonces, VidaLonga ha crecido y evolucionado, ampliando su alcance y aumentando la cantidad y calidad de su contenido.</p>
        </section>

        <section>
            <h2>Equipo</h2>
            <p>Nuestro equipo está formado por profesionales experimentados en diversas áreas, como nutrición, ejercicio, medicina y
                bienestar emocional. Cada miembro del equipo aporta sus conocimientos y experiencia para garantizar que el contenido de VidaLonga sea completo, preciso y relevante para las necesidades de nuestra comunidad.</p>
        </section>
        <section>
            <h2>Contacto</h2>
            <p>Agradecemos sinceramente tu interés en VidaLonga y esperamos que encuentres el conocimiento y el apoyo que buscas en nuestro sitio web. Si tienes alguna pregunta, sugerencia o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en tu camino hacia una vida más larga y saludable.</p>
        </section>
    </div>
</template>
<script></script>
<style scoped lang="scss">
.vidalonga-about {
    max-width: 1000px;
    margin: auto;
    padding: 120px 20px 20px 20px;

    &__text-company-name {
        font-size: 6rem;
        color: var(--color-primary);
        font-family: 'Inconsolata', monospace;
        margin-bottom: 1rem;

        @media screen and (max-width: 1000px) {
            font-size: 4rem;
        }
    }

    &__text-secondery {
        opacity: 0.7;
        font-weight: 300;
    }
}
</style>