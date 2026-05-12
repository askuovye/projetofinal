<script>
  import { useRoute, useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/auth";
  import { user.serivce } from "@/services/user.service";
</script>

<template>
  <div>
    <nav class="desktop-navbar">
      <button>
        <i class="bi bi-instagram"></i>
      </button>
      <button>
        <i class="bi bi-house-door"></i>
        <span>Home</span>
      </button>
      <button>
        <i class="bi bi-search"></i>
        <span>Search</span>
      </button>
      <button>
        <i class="bi bi-plus-lg"></i>
        <span>Criar</span>
      </button>
      <button>
        <span>Perfil</span>
      </button>
      <button>
        <i class="bi bi-box-arrow-left"></i>
        <span>Logout</span>
      </button>
    </nav>

    <nav class="mobile-topbar">
      <h2>InstaClone</h2>
      <div>
        <div>
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      <div class="search-result"></div>
    </nav>

    <main>
      <router-view />
    </main>
    <section class="desktop-sidebar">
      <div>
        <span>Profile</span>
      </div>
      <div>
        <span>Sugestões para você</span>
      </div>
      <p>
        Sobre Ajuda Imprensa API Carreiras Privacidade Termos Localizações
        Idioma Meta Verified © 2026 Instaclone from 3c
      </p>
    </section>
  </div>
</template>

<style scoped></style>
