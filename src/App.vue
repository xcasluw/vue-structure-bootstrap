<template>
  <div id="app">
    <Header title="Vue Structure" />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
    Footer
  }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "header header" "menu content" "menu footer";
}

#app.hide-menu {
  grid-template-areas: "header header" "content content" "footer footer";
}
</style>
