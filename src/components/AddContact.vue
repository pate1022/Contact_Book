<template>
  <div>
    <h1>Add New Contact</h1>
    <form @submit.prevent="addContact">
      <label for="firstName">First Name:</label>
      <input v-model="firstName" required>
      <label for="lastName">Last Name:</label>
      <input v-model="lastName" required>
      <label for="email">Email:</label>
      <input v-model="email" type="email" required>
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getContacts, saveContacts } from '../services/LocalStorageService';

export default {
  name: 'AddContact',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
  methods: {
    addContact() {
      const newContact = {
        id: generateUniqueId(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      // Fetch existing contacts from local storage
      const contacts = getContacts();

      // Add new contact
      contacts.push(newContact);

      // Save the updated contacts
      saveContacts(contacts);

      
      this.$router.push({ name: 'ContactDetails', params: { id: newContact.id } });
    },
  },
};
</script>
