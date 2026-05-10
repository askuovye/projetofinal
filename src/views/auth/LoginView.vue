<script setup>

</script>

<template>
    <section>
        <img>
        <h2>
            Veja momentos do dia a dia dos seus amigos próximos.
        </h2>
        <img>
    </section>
    <section>
        <div>
            <h4>Entrar no Instagram</h4>
            <label for="username">Usuário</label>
            <input type="text" id="username" name="username">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password">
            <button>Entrar</button>
            <button>Esqueceu a senha?</button>
        </div>
        <div>
            <button>Entrar com Facebook</button>
            <button>
                <router-link to="/register">
                    Criar nova conta
                </router-link>
            </button>
            <img>
        </div>
    </section>
    <footer>
        <p>
            © 2026 InstaClone from 3C
        </p>
    </footer>
</template>

<style scoped>

</style>