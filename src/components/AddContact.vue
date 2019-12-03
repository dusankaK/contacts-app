<template>
  <div>
    <h3>Add new contact</h3>
    <form @submit.prevent="onSubmit()">
      <label>First name:</label>
      <input v-model="newContact.first_name" type="text" id="first_name" />
      <br />
      <label>Last name:</label>
      <input v-model="newContact.last_name" type="text" id="last_name" />
      <br />
      <label>Email adress:</label>
      <input v-model="newContact.email" type="text" id="email" />
      <br />
      <button type="submit">{{ isEditing ? 'Edit' : 'Submit'}}</button>
    </form>
  </div>
</template>
<script>
import { contactservice } from "../services/ContactService";

export default {
  data() {
    return {
      newContact: {},
      isEditing: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.isEditing = true;
      contactservice.get(this.$route.params.id).then(response => {
        this.newContact = response.data;
      });
    }
  },

  methods: {
    onSubmit() {
      if (this.$route.params.id) {
        this.editContact();
      } else {
        this.addnewContact();
      }
    },
    addNewContact() {
      contactservice.addContact(this.newContact).then(() => {
        this.$router.push("/");
      });
    },
    editContact() {
      contactservice.edit(this.newContact).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
</style>