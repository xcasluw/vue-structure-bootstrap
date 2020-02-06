import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "@/components/Auth";
import Home from "@/components/Home";

Vue.use(VueRouter);

const routes = [
  { name: "auth", path: "/auth", component: Auth },
  { name: "home", path: "/", component: Home },
  { name: "home", path: "/home", component: Home }
];

export default new VueRouter({
  mode: "history",
  routes: routes
});
