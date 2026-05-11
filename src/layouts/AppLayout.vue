<script>

</script>

<template>
  <div class="desktop">
    <nav>
      <button>
        <i class="bi bi-instagram"></i>
      </button>
      <button>
        <i class="bi bi-house-door"></i>
        <span>Home</span>
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
    <main>
      <router-view />
    </main>
    <section>
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
