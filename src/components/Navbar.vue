<template>
<div id="navbar">
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand to="/">
        <img src="../assets/logo.svg" width="32px" class="align-top">
        Oneiric<b>Gardens</b>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
          <b-nav-item to="/stories">Stories</b-nav-item>
          <b-nav-item to="/categories">Categories</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style>

</style>