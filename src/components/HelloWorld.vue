
<template>
  <div>
    <form v-on:submit.prevent>
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button @click="login">Login</button>
    </form>

    <router-link :to="{ name: 'add'}">Add new contact</router-link>
    <h3>All contacts</h3>

    <ul v-for="(contact,index) in contacts" :key="index">
      <li>
        {{contact.first_name}}
        <br />
        {{contact.last_name}}
        <br />
        {{contact.email}}
        <br />
        <router-link :to="{ name: 'single', params: { id: contact.id }}">Single Contact</router-link>
        <br />
        <router-link :to="{ name: 'edit', params: { id: contact.id }}">Edit Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { contactservice } from "../services/ContactService";

export default {
  data() {
    return {
      contacts: [],
      email: "",
      password: ""
    };
  },

  mounted() {
    contactservice.getAll().then(response => {
      this.contacts = response.data;
    });
  },

  methods: {
    login() {
      contactservice
        .login({ email: this.email, password: this.password })
        .then(r => {
          console.log("Login success", r);
          localStorage.setItem('token', r.data.token)
        });
    }
  }
};
</script>