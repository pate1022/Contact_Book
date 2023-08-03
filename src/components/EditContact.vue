<template>
    <div>
      <h1>Edit Contact</h1>
      <form @submit.prevent="editContact">
        <label for="firstName">First Name:</label>
        <input v-model="editedContact.firstName" required>
        <label for="lastName">Last Name:</label>
        <input v-model="editedContact.lastName" required>
        <label for="email">Email:</label>
        <input v-model="editedContact.email" type="email" required>
        <button type="submit">Save Changes</button>
        <router-link :to="{ name: 'ContactDetails', params: { id: editedContact.id } }">Cancel</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { getContacts, saveContacts } from '../services/LocalStorageService';
  
  export default {
    name: 'EditContact',
    setup() {
      const router = useRouter();
      const route = useRoute();
      const contacts = ref(getContacts());
      const editedContact = reactive({ ...contacts.value.find(contact => contact.id === route.params.id) });
  
      const editContact = () => {
        
        const contactIndex = contacts.value.findIndex(contact => contact.id === editedContact.id);
  
        if (contactIndex !== -1) {
          // Update the contact 
          contacts.value[contactIndex] = editedContact;
  
          // Save the update Contacts
          saveContacts(contacts.value);
  
        
          router.push({ name: 'ContactDetails', params: { id: editedContact.id } });
        }
      };
  
      return {
        editedContact,
        editContact,
      };
    },
  };
  </script>
  