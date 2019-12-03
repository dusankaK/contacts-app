<template>
  <div>
    <h3>
      First name: {{contact.first_name}}
      <br />
      Last name: {{contact.last_name}}
    </h3>
    <p>{{contact.email}}</p>
    <button @click= "deleteContact(contact.id)">Delete</button>
  </div>
</template>

<script>
import { contactservice } from "../services/ContactService";

export default {
  data() {
    return {
      contact: {}
    };
  },

  created() {
    contactservice.get(this.$route.params.id).then(response => {
      this.contact = response.data;
    });
  },
  methods: {
      deleteContact(id){
          contactservice.delete(id).then(()=>{
              this.$router.push("/")
          })
      }
  }

};
</script>

<style scoped>
</style>