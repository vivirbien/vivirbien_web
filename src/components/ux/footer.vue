<template>
    <footer class="footer">
      <div class="container">
  
        <div class="footer-section">
          <h3>Contacto</h3>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Teléfono:</strong> +34 123 456 789</p>
        </div>
  
        <div class="footer-section footer-section__social">
          <h3>Redes sociales</h3>
          <p>
            <a class="text-link" href="https://www.facebook.com/vidalonga">Facebook</a>
            <a class="text-link" href="https://www.twitter.com/vidalonga">Twitter</a>
            <a class="text-link" href="https://www.instagram.com/vidalonga">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
    <div class="copyright">
        <p>&copy; {{ currentYear }} VidaLonga. Todos los derechos reservados.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped lang="scss">
  .footer {
    margin-top: 100px;
    color: #333;
    padding: 1.5rem 1rem 0 1rem;
    border-top: 1px solid #222;
  }
  
  .container {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-section {
    flex: 1;
    margin: 0 1rem;

    &__social {
        p {
            a {
                margin-right: 10px;
            }

            @media screen and (max-width: 800px) {
                display: flex;
                flex-direction: column;
            }
        }
    }
  }
  
  .footer h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .footer ul {
    list-style: none;
    padding: 0;
  }
  
  .footer li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer li a:hover {
    text-decoration: underline;
  }
  
  .copyright {
    text-align: center;
    font-size: 0.9rem;
    border-top: 1px solid #222;
    background-color: var(--bg-5rd);

    p {
        margin: 0;
    }
  }
  </style>
  