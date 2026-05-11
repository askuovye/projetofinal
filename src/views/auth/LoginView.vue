<script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

async function handleLogin() {
  if (!email.value || !password.value) {
    errorMessage.value = "Por favor, preencha todos os campos.";
    return;
  }
  try {
    await authStore.login(email.value, password.value);
    const redirect = route.query.redirect || '/'
    router.push(redirect);
  } catch (error) {
    console.error("Login failed:", error);
    errorMessage.value = "Invalid email or password.";
  }
}
</script>

<template>
  <section>
    <img />
    <h2>Veja momentos do dia a dia dos seus amigos próximos.</h2>
    <img />
  </section>
  <section>
    <div>
      <form @submit.prevent="handleLogin">
        <input
            v-model="email"
            type="email"
            placeholder="Email"
        />

        <input
            v-model="password"
            type="password"
            placeholder="Senha"
        />

        <p v-if="errorMessage" class="error">
            {{ errorMessage }}
        </p>

        <button type="submit">
            Entrar
        </button>
    </form>
      <button>Esqueceu a senha?</button>
    </div>
    <div>
      <button>Entrar com Facebook</button>
      <button>
        <router-link to="/register"> Criar nova conta </router-link>
      </button>
      <img />
    </div>
  </section>
  <footer>
    <p>© 2026 InstaClone from 3C</p>
  </footer>
</template>

<style scoped></style>
