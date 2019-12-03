<template>
  <div>
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
        <router-link :to="{ name: 'single', params: { id: contact.id }}">Single Contact</router-link><br>
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
      contacts: []
    };
  },

  mounted() {
    contactservice.getAll().then(response => {
      this.contacts = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
