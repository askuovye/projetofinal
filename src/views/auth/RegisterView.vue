<script setup></script>

<template>
  <section>
    <button>
      <router-link to="/login">
        <i class="bi bi-arrow-left-short"></i>
      </router-link>
    </button>
    <img />
    <h4>
      Comece a usar o Instagram Cadastre-se para ver fotos e vídeos dos seus
      amigos.
    </h4>
    <h4>Email</h4>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
    <h4>Nome Completo</h4>
    <label for="fullname">Nome Completo</label>
    <input type="text" id="name" name="name" />
    <h4>Nome de Usuario</h4>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" />
    <h4>Senha</h4>
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" />
    <h4>Confirmar Senha</h4>
    <label for="confirmPassword">Confirmar Senha</label>
    <input type="password" id="confirmPassword" name="confirmPassword" />
    <p>
      As pessoas que usam nosso serviço podem ter carregado suas informações de
      contato no Instagram. Ao tocar em Enviar, você concorda em criar uma conta
      e em seguir os , a e a do Instagram. A descreve como podemos usar as
      informações que coletamos quando você cria uma conta. Por exemplo, usamos
      essas informações para fornecer, personalizar e melhorar nossos produtos,
      incluindo anúncios.
    </p>
    <button>Enviar</button>
    <button>
      <router-link to="/login"> Já tenho uma conta </router-link>
    </button>
  </section>
</template>

<style scoped></style>
