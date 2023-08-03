<template>
  <div>
    <h1>Contact Book</h1>
    <ul>
      <li v-for="contact in sortedContacts" :key="contact.id">
        <router-link :to="{ name: 'ContactDetails', params: { id: contact.id }}">{{ contact.fullName }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { getContacts } from '../services/LocalStorageService';

export default {
  name: 'ContactList',
  computed: {
    sortedContacts() {
      return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  setup() {
    const contacts = ref(getContacts());

    return {
      contacts,
    };
  },
};
</script>
