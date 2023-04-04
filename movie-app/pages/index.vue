<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters justify-content-center align-items-center vh-100" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <div class="col-md-8 text-center">
        <h1 class="display-4 mb-4">Welcome to My Movie App</h1>
        <p class="lead mb-5">Choose an option below:</p>
        <div class="d-flex justify-content-center">
          <nuxt-link to="/movies" class="btn btn-primary mr-3">View Movie List</nuxt-link>
          <nuxt-link to="/login" class="btn btn-outline-secondary mr-3">Login</nuxt-link>
          <nuxt-link to="/register" class="btn btn-outline-success">Register</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: require('@/assets/background.jpg')
    }
  }
}
</script>

<style>
.container-fluid {
  height: 100%;
}

.btn {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
}

@media (max-width: 767px) {
  .display-4 {
    font-size: 2.5rem;
  }
}
</style>