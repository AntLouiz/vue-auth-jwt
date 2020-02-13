import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import TheLogin from "../components/auth/TheLogin";
import TheRegister from "../components/auth/TheRegister";
import Resources from "../components/resources/Resources";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: TheLogin
  },
  {
    path: "/register",
    name: "Register",
    component: TheRegister
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
