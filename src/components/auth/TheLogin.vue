<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>Email</label>
      <input
        required
        v-model="email"
        type="email"
        placeholder="Your email address"
      />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script charset="utf-8">
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions({
      makeLogin: "auth/login"
    }),
    login() {
      let email = this.email;
      let password = this.password;

      this.makeLogin({ email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
