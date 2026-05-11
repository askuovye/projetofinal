<script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from "vue";
const authStore = useAuthStore();
const email = ref("");
const name = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
async function handleRegister() {
  if (
    !email.value ||
    !name.value ||
    !username.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    errorMessage.value = "Por favor, preencha todos os campos.";
    return;
  }
  try {
    await authStore.register(
      name.value,
      username.value,
      email.value,
      password.value,
      confirmPassword.value,
    );
  } catch (error) {
    console.error("Registration failed:", error);
    errorMessage.value = "Falha no Registro. Tente novamente.";
  }
}
</script>

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
    <div>
      <form @submit.prevent="handleRegister">
        <input v-model="email" type="email" placeholder="E-mail" />
        <input v-model="name" type="text" placeholder="Nome Completo" />
        <input v-model="username" type="text" placeholder="Usuário" />
        <input v-model="password" type="password" placeholder="Senha" />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
        />

        <p>
          As pessoas que usam nosso serviço podem ter carregado suas informações
          de contato no Instagram. Ao tocar em Enviar, você concorda em criar
          uma conta e em seguir os , a e a do Instagram. A descreve como podemos
          usar as informações que coletamos quando você cria uma conta. Por
          exemplo, usamos essas informações para fornecer, personalizar e
          melhorar nossos produtos, incluindo anúncios.
        </p>

        <p v-if="errorMessage" class="error">
          {{ errorMessage }}
        </p>
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
    <button>
      <router-link to="/login"> Já tenho uma conta </router-link>
    </button>
  </section>
</template>

<style scoped></style>
