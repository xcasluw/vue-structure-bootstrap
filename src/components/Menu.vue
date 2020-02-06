<template>
  <aside class="menu">
    <router-link to="/home"> <i class="fa fa-home"></i> Home </router-link>
  </aside>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #263241, #1e2227);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}

.menu a i {
  margin: 10px;
  font-size: 25px;
}
.router-link-exact-active,
.router-link-active:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
