<template>
    <div class="container-fluid p-0">
      <div class="row no-gutters justify-content-center align-items-center vh-100" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
        <div class="col-md-4">
          <b-card title="Sign Up" class="text-center" :header-class="'bg-success text-white'">
            <b-form @submit.prevent="register">
              <b-form-group id="name-group" label="Name:" label-for="name">
                <b-form-input id="name" v-model="name" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group id="email-group" label="Email address:" label-for="email">
                <b-form-input id="email" v-model="email" type="email" required></b-form-input>
              </b-form-group>
              <b-form-group id="password-group" label="Password:" label-for="password">
                <b-form-input id="password" v-model="password" type="password" required></b-form-input>
              </b-form-group>
              <b-form-group id="confirm-password-group" label="Confirm Password:" label-for="confirm-password">
                <b-form-input id="confirm-password" v-model="confirmPassword" type="password" required></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="success" block>Sign Up</b-button>
            </b-form>
            <p class="mt-3">Already have an account? <nuxt-link to="/login">Log in now</nuxt-link></p>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImage: require('@/assets/background.jpg'),
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register() {
        // Handle registration logic here
      }
    }
  }
    </script>
    <style>
    .container-fluid {
      height: 100%;
    }
    
    .card {
      border: none;
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0.75);
      color: #fff;
    }
    
    @media (max-width: 767px) {
      .card-title {
        font-size: 2rem;
      }
    }
    </style>