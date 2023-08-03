<template>
  <div>
    <h1>{{ contact.fullName }}</h1>
    <p>{{ contact.email }}</p>
    <router-link to="/">Back to Contact List</router-link>
    <button @click="editContact">Edit Contact</button>
    <button @click="deleteContact">Delete Contact</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getContacts, saveContacts } from '../services/LocalStorageService';

export default {
  name: 'ContactDetails',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const contacts = ref(getContacts());
    const contact = ref(null);

    // Fetch contact details from local storage based on props.id
    onMounted(() => {
      const contactId = route.params.id;
      contact.value = contacts.value.find(c => c.id === contactId);
    });

    const editContact = () => {
      router.push({ name: 'EditContact', params: { id: contact.value.id } });
    };

    const deleteContact = () => {
      const contactId = contact.value.id;
      const updatedContacts = contacts.value.filter(c => c.id !== contactId);
      saveContacts(updatedContacts);
      router.push('/');
    };

    return {
      contact,
      editContact,
      deleteContact,
    };
  },
};
</script>
