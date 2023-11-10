<script>
import MapaGoogle from '../components/MapaGoogle.vue';

export default {
  name: 'App',
  components: {
    MapaGoogle,
    // outros componentes que você pode ter
  },
  // outras configurações
};
</script>


<template>
  <main id="main">
    <section class="about">
        <div>
          <h2>Quem somos</h2>
          <p>Ruivo Solutions, especializada em oferecer serviços de alta qualidade em assistência técnica para celulares, computadores e notebooks. Nosso compromisso é fornecer soluções eficientes para suas necessidades tecnológicas.</p>
        </div>
      </section>

      <section class="servicos">
        <h2>Serviços</h2>
        <div>
          <p>Oferecemos uma variedade de serviços para atender suas necessidades tecnológicas:</p>
          <ul>
            <li>Reparo de celulares e smartphones</li>
            <li>Manutenção de computadores e laptops</li>
            <li>Upgrade de hardware e software</li>
            <li>Recuperação de dados</li>
            <li>Configuração de rede</li>
            <li>e muito mais...</li>
          </ul>
        </div>
      </section>

      <section class="orcamento">
        <h2>Peça um orçamento</h2>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <section>
        <h2>Fale Conosco</h2>
        <p>Entre em contato conosco para obter mais informações.</p>
        <p>E-mail: contato@ruivosolutions.com</p>
        <p>Telefone: (123) 456-7890</p>
      </section>

      <section class="localizacao">
        <h2>Localização</h2>
        <p>Rua Tech, nº 123, Centro, Cidade Tech. CEP: 12345-678</p>
      </section>
      
      <section class="faq">
        <h2>Perguntas Frequentes</h2>
        <ul>
          <!-- Perguntas frequentes aqui -->
        </ul>
      </section>
  </main>
</template>

<style scoped>
#main {
  min-height: 92vh;
  min-height: calc(100vh - var(--header-height));
}

section {
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section:first-of-type {
  height: calc(100vh - var(--header-height));;
}

section:nth-child(odd) {
  background-color: gray;
}

.orcamento {
}

.orcamento > h2 {
  font-weight: bolder;
}

.orcamento > form {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
}

</style>