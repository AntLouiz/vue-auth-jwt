<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
      <span v-else><router-link to="/login">Login</router-link></span>
      <span><router-link to="/resources">Resources</router-link></span>
    </div>
    <router-view />
  </div>
</template>
<script charset="utf-8">
import { mapActions } from 'vuex'

export default {
  computed: {
    isLoggedIn: function () {
      return !!this.$store.state.auth.token
    }
  },
  methods: {
    ...mapActions({
      makeLogout: 'auth/logout'
    }),
    redirectToLogin () {
      this.$router.push('/login');
    },
    logout () {
      this.makeLogout().then(() => {
        this.redirectToLogin()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
