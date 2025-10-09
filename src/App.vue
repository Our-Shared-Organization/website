<script setup>
import { RouterLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

async function auth(phone, password) {
  try {
    const res = await fetch(`http://localhost:5053/user/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "phone": phone,
        "password": password
      })
    });
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

await auth("+5", "123")

async function register(name, surname, phone, sex, password) {
  try {
    const res = await fetch(`http://localhost:5053/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userName": name,
        "userSurname": surname,
        "userPhone": phone,
        "userSex": sex,
        "userPassword": password
      })
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// await register("anewone_email", "1231", "name", "surname", "123123")
</script>

<template>
  <header>

  </header>
  <main>
    <form>
      <input />
      <input />
      <button type="submit">Вход</button>
    </form>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
