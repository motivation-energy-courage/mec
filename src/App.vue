<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Rating</router-link>
      <router-link to="/quiz">Quiz</router-link>

      <router-link to="/my-page">Sustainable</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 10px;

  text-align: right;
  font-family: "Baskerville Old Face", serif;

  position: fixed;
  top: 0%;
  right: 10px;
  z-index: 10;
  background-color: #111111;
}

#nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 25px;
  padding: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
